"use client";

import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import React from "react";
import { Suggestions } from "@/app/types/types";
import { getSuggestions } from "@/app/utls/api";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRouter } from "next/navigation";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Suggestions[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setOpen(true);
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
    console.log("Selected:", value);
    router.push(`/en/${value}`);
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
        open={open}
        onInputChange={handleInputChange}
        onClose={handleClose}
        onChange={handleChange}
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
      <IconButton>
        <SettingsTwoToneIcon />
      </IconButton>
    </Paper>
  );
}
