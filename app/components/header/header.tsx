"use client";

import SearchBar from "@/app/components/header/search";
import { ClickAwayListener } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useCallback, useState } from "react";
import About from "./about/about";
import Settings from "./settings";

export default function Header() {
  const [openSettings, setOpenSettings] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const handleOnClickAway = useCallback(() => {
    setOpenSettings(false);
    setOpenAbout(false);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xs" sx={{ p: 2, position: "relative" }}>
        <ClickAwayListener onClickAway={handleOnClickAway}>
          <div>
            <SearchBar
              openSettings={openSettings}
              setOpenSettings={setOpenSettings}
              openAbout={openAbout}
              setOpenAbout={setOpenAbout}
            />

            <Settings open={openSettings} />
            <About open={openAbout} setOpen={setOpenAbout} />
          </div>
        </ClickAwayListener>
      </Container>
    </Box>
  );
}
