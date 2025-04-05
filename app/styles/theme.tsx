"use client";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
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
          light: "rgb(231, 194, 108)",
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
        // @ts-expect-error: MuiLink doesn't have prefetch prop
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
          border: "1px solid rgba(255, 255, 255, 0.125)",
          backdropFilter: "blur(10px)",
          borderRadius: 5,
        },
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
        root: ({ theme }) => ({
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
        root: ({ theme }) => ({
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
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
