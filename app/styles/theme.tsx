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
          main: "rgba(255, 196, 0, 1)",
          light: "rgba(255, 204, 38, 1)",
          dark: "rgba(199, 145, 0, 1)",
        },
        background: {
          paper: "rgba(53, 48, 39, 0.3)",
          default: "#110e07",
        },
      },
    },
    light: {
      palette: {
        background: {
          paper: "rgba(226, 217, 204, 0.3)",
          default: "rgba(255, 248, 242, 1)",
        },
      },
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
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
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
