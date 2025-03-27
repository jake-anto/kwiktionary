"use client";

import { Suggestions } from "@/app/types/types";
import { getSuggestions } from "@/app/utils/api";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar({
  openSettings,
  setOpenSettings,
}: {
  openSettings: boolean;
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [options, setOptions] = useState<readonly Suggestions[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpenSuggestions(false);
    setOptions([]);
  };

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setOpenSuggestions(true);
    (async () => {
      setLoading(true);
      try {
        const results = await getSuggestions(value);
        console.log("Results:", results);
        setOptions(results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    })();
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
  };

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "space-evenly",
      }}
    >
      <Autocomplete
        sx={{ width: 300 }}
        options={options}
        loading={loading}
        open={openSuggestions}
        onInputChange={handleInputChange}
        onClose={handleClose}
        onChange={handleChange}
        onFocus={handleFocus}
        noOptionsText="No results found"
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ mx: 2 }}
            variant="standard"
            label="Search"
            slotProps={{
              input: {
                ...params.InputProps,
                disableUnderline: true,
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
        <InfoOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => setOpenSettings(!openSettings)}>
        <SettingsTwoToneIcon />
      </IconButton>
    </Paper>
  );
}
