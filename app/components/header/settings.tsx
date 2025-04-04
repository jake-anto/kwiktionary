import {
  Box,
  Collapse,
  FormControl,
  FormLabel,
  IconButton,
  Paper,
  Typography,
  useColorScheme,
} from "@mui/material";
import { MoonStar, Sun, SunMoon } from "lucide-react";

export default function Settings({ open }: { open: boolean }) {
  const { mode, setMode } = useColorScheme();

  return (
    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
      sx={{
        position: "absolute",
        width: "100%",
        top: "100%",
        maxWidth: 396,
        backdropFilter: "blur(10px)",
      }}
    >
      <Paper sx={{ borderRadius: 5 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Settings
        </Typography>
        <Box sx={{ px: 2, pb: 2 }}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormLabel id="theme-toggle">
              <strong>Theme:</strong>
              {` ${mode}`}
            </FormLabel>
            <IconButton
              onClick={() =>
                setMode(
                  mode === "dark"
                    ? "light"
                    : mode === "light"
                    ? "system"
                    : mode === "system"
                    ? "dark"
                    : "dark"
                )
              }
              aria-label="Toggle theme"
            >
              {mode === "dark" && <MoonStar />}
              {mode === "light" && <Sun />}
              {mode === "system" && <SunMoon />}
            </IconButton>
          </FormControl>
        </Box>
      </Paper>
    </Collapse>
  );
}
