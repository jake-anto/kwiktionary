"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// The theme is imported here rather than in the root layout so it never crosses
// the server/client boundary as a prop, which leaves it a lazily-instantiated
// client reference that HMR can invalidate.
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
