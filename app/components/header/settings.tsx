import {
  Box,
  Button,
  Card,
  Collapse,
  FormControl,
  FormLabel,
  IconButton,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import {
  Download,
  Settings as Gear,
  MoonStar,
  Sun,
  SunMoon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function Settings({ open }: { open: boolean }) {
  const { mode, setMode } = useColorScheme();
  const [installSupport, setInstallSupport] = useState<boolean>(false);
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const handleThemeToggle = useCallback(() => {
    setMode(
      mode === "dark"
        ? "light"
        : mode === "light"
          ? "system"
          : mode === "system"
            ? "dark"
            : "dark"
    );
  }, [mode, setMode]);

  const handleInstall = useCallback(async () => {
    if (!installPrompt) {
      return;
    }
    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") {
        setInstallSupport(false);
        setInstallPrompt(null);
      }
    } catch (error) {
      console.error("Error prompting installation:", error);
      setInstallSupport(false);
      setInstallPrompt(null);
      alert("Installation failed due to an error. See console for details.");
    }
  }, [installPrompt]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallSupport(true);
      setInstallPrompt(event as BeforeInstallPromptEvent); // Cast the event
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => {
      setInstallSupport(false);
      setInstallPrompt(null);
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleBeforeInstallPrompt);
    };
  }, []);

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
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Gear />
          <Typography variant="h6">Settings</Typography>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <FormControl sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
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
                  onClick={handleThemeToggle}
                  aria-label="Toggle theme"
                >
                  {mode === "dark" && <MoonStar />}
                  {mode === "light" && <Sun />}
                  {mode === "system" && <SunMoon />}
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                hidden={!installSupport}
              >
                <FormLabel id="download">
                  <Typography>
                    <strong>Install</strong>
                  </Typography>
                </FormLabel>
                <Tooltip title="Your browser may not support this feature.">
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Download />}
                    onClick={handleInstall}
                  >
                    Install
                  </Button>
                </Tooltip>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Card>
    </Collapse>
  );
}
