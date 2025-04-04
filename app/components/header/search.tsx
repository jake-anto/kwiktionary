"use client";

import { Suggestions } from "@/app/types/types";
import { getSuggestions } from "@/app/utils/api";
import { Icon } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { CornerDownLeft, Info, Search, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Error from "../definition/error";

export default function SearchBar({
  openSettings,
  setOpenSettings,
}: {
  openSettings: boolean;
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [options, setOptions] = useState<readonly Suggestions[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Cache for recent searches to avoid redundant API calls
  const searchCacheRef = useRef<Record<string, Suggestions[]>>({});

  const handleClose = () => {
    setOpenSuggestions(false);
  };

  const fetchSuggestions = useCallback(async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    // Check cache first
    if (searchCacheRef.current[value]) {
      setOptions(searchCacheRef.current[value]);
      return;
    }

    setLoading(true);
    try {
      const results = await getSuggestions(value);
      setOptions(results);
      // Save to cache
      searchCacheRef.current[value] = results;
    } catch (error) {
      setError(`Failed to fetch suggestions as ${error}`);
      setOpenSuggestions(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value);

    // Clear previous debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (value) {
      setOpenSuggestions(true);

      if (!searchCacheRef.current[value]) {
        setLoading(true);
      }

      debounceTimerRef.current = setTimeout(() => {
        fetchSuggestions(value);
      }, 500);
    } else {
      setOpenSuggestions(false);
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Suggestions | null
  ) => {
    if (!value) return;
    setOpenSuggestions(false);
    router.push(`/en/${value}`);
  };

  const handleFocus = () => {
    setOpenSettings(false);
    if (inputValue) {
      setOpenSuggestions(true);
    }
  };

  // Clean up debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "space-evenly",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Autocomplete
          sx={{ width: "100%", maxWidth: 300 }}
          options={options}
          loading={loading}
          open={openSuggestions}
          onInputChange={handleInputChange}
          onClose={handleClose}
          onChange={handleChange}
          onFocus={handleFocus}
          autoHighlight
          noOptionsText="No results found"
          slotProps={{
            paper: {
              sx: {
                mt: 2,
                borderRadius: 5,
              },
            },
            listbox: {
              sx: {
                py: 0.5,
              },
            },
          }}
          renderOption={(props, option) => {
            const { key, ...otherProps } = props;
            const isFirstOption = options.length > 0 && option === options[0];

            return (
              <Box
                key={key}
                component="li"
                {...otherProps}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: 5,
                }}
              >
                {option}
                {isFirstOption && (
                  <CornerDownLeft
                    style={{
                      marginLeft: "auto",
                    }}
                  />
                )}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ mx: 1, my: 1 }}
              variant="standard"
              placeholder="Search"
              slotProps={{
                input: {
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <Icon sx={{ mr: 1 }}>
                      <Search />
                    </Icon>
                  ),
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                    </React.Fragment>
                  ),
                },
              }}
            />
          )}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={() => router.push("/")}>
          <Info />
        </IconButton>
        <IconButton onClick={() => setOpenSettings(!openSettings)}>
          <Settings />
        </IconButton>
      </Paper>
      {error && <Error error={error} setError={setError} />}
    </>
  );
}
