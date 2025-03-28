"use client";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    dark: true,
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
  },
});

export default theme;
