"use client";

import { Suggestions } from "@/app/types/types";
import { getSuggestions } from "@/app/utils/api";
import {
  Autocomplete,
  Box,
  Card,
  CircularProgress,
  Divider,
  Icon,
  IconButton,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";
import { CornerDownLeft, Info, Search, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Error from "../error";

export default function SearchBar({
  openSettings,
  setOpenSettings,
  openAbout,
  setOpenAbout,
}: {
  openSettings: boolean;
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
  openAbout: boolean;
  setOpenAbout: React.Dispatch<React.SetStateAction<boolean>>;
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

  const handleClose = useCallback(() => {
    setOpenSuggestions(false);
  }, []);

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

  const handleInputChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: string) => {
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
        }, 300);
      } else {
        setOpenSuggestions(false);
        setLoading(false);
      }
    },
    [fetchSuggestions]
  );

  const handleChange = useCallback(
    (
      event: React.SyntheticEvent<Element, Event>,
      value: Suggestions | null
    ) => {
      if (!value) return;
      setOpenSuggestions(false);
      router.push(`/en/${value}`);
    },
    [router]
  );

  const handleFocus = useCallback(() => {
    setOpenSettings(false);
    setOpenAbout(false);
    if (inputValue) {
      setOpenSuggestions(true);
    }
  }, [inputValue, setOpenAbout, setOpenSettings]);

  const handleInfoClick = useCallback(() => {
    setTimeout(() => setOpenAbout(!openAbout), 300);
    setOpenSettings(false);
  }, [openAbout, setOpenAbout, setOpenSettings]);

  const handleSettingsClick = useCallback(() => {
    setTimeout(() => setOpenSettings(!openSettings), 300);
    setOpenAbout(false);
  }, [openSettings, setOpenAbout, setOpenSettings]);

  const renderOption = useCallback(
    (props: HTMLAttributes<HTMLLIElement>, option: Suggestions) => {
      const isFirstOption = options.length > 0 && option === options[0];

      return (
        <Box
          {...props}
          component="li"
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
              aria-hidden="true"
              role="presentation"
            />
          )}
        </Box>
      );
    },
    [options]
  );

  const renderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <TextField
        {...params}
        sx={{ mx: 1, my: 1 }}
        variant="standard"
        placeholder="Search"
        slotProps={{
          input: {
            ...params.InputProps,
            "aria-label": "Search for terms",
            disableUnderline: true,
            startAdornment: (
              <Icon sx={{ mr: 1 }} aria-hidden="true">
                <Search />
              </Icon>
            ),
            endAdornment: loading ? (
              <CircularProgress
                color="inherit"
                size={20}
                aria-label={loading ? "Loading search results" : ""}
              />
            ) : null,
          },
        }}
      />
    ),
    [loading]
  );

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
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
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
          aria-label="Search for terms"
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
              "aria-label": "Search suggestions",
            },
          }}
          renderOption={renderOption}
          renderInput={renderInput}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={handleInfoClick} aria-label="About">
          <Info />
        </IconButton>
        <IconButton
          onClick={handleSettingsClick}
          aria-label="Settings"
          aria-expanded={openSettings}
        >
          <Settings />
        </IconButton>
      </Card>
      {error && <Error error={error} setError={setError} />}
    </>
  );
}
