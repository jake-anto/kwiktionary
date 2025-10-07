"use client";
import { createTheme, Theme } from "@mui/material/styles";
import Link from "next/link";

export const themeOptions = {
  typography: {
    fontFamily: "var(--font-inter)",
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "rgb(255, 196, 0)",
          light: "rgb(255, 204, 38)",
          dark: "rgb(199, 145, 0)",
        },
        background: {
          paper: "rgba(53, 48, 39, 0.3)",
          default: "rgb(17, 14, 7)",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "rgb(118, 90, 11)",
          light: "rgb(89, 82, 68)",
          dark: "rgb(199, 145, 0)",
        },
        background: {
          paper: "rgba(226, 217, 204, 0.8)",
          default: "rgb(255, 248, 242)",
        },
      },
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
        prefetch: false,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        sx: {
          backdropFilter: "blur(10px)",
          borderRadius: 5,
        },
      },
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiDialog: {
      defaultProps: {
        slotProps: {
          paper: { elevation: 0 },
        },
      },
    },
    MuiTableContainer: {
      defaultProps: {
        sx: {
          scrollbarWidth: "thin",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          "& th": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#231f17" : "#999080",
            color: theme.palette.mode === "dark" ? "white" : "black",
          },
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          backgroundColor:
            theme.palette.mode === "dark" ? "#231f17" : "#999080",
          color: theme.palette.mode === "dark" ? "white" : "black",
        }),
      },
      defaultProps: {
        rowsPerPageOptions: [5, 10, 25],
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.background.paper,
          backdropFilter: "blur(10px)",
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
};

// Temporarily comment out the export to prevent TS2345 error
export default createTheme({
  ...themeOptions,
  components: {
    ...themeOptions.components,
    MuiSkeleton: {
      defaultProps: {
        animation: "pulse", // Change to "pulse" or remove this line to use default
      },
    },
  },
});
