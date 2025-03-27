"use client";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
  },
});

export default theme;
