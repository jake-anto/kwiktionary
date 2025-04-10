import { Box, Typography } from "@mui/material";
import { WifiOff } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline | Kwiktionary",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Offline() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <WifiOff size={64} />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          You are offline
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
          }}
          gutterBottom
        >
          Please check your internet connection and try again.
        </Typography>
      </Box>
    </Box>
  );
}
