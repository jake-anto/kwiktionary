import {
  Box,
  Card,
  Collapse,
  FormControl,
  FormLabel,
  IconButton,
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
        top: "100%",
        left: 0,
        right: 0,
        px: 2,
        display: "flex",
        justifyContent: "center",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <Card sx={{ maxWidth: 396, mx: "auto", width: "100%" }}>
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
              <Typography>
                <strong>Theme</strong>
              </Typography>
            </FormLabel>
            <Box>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}
              >{`(${mode})`}</Typography>

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
            </Box>
          </FormControl>
        </Box>
      </Card>
    </Collapse>
  );
}
