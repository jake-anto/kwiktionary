"use client";

import { Box, Card, Typography, useMediaQuery } from "@mui/material";

export default function FeatureCard({
  logo,
  title,
  description,
}: {
  logo: React.ReactNode;
  title: string;
  description: string;
}) {
  const alternativeStyle = useMediaQuery("(min-width:600px)");
  return (
    <Card sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: alternativeStyle ? "column" : "row",
          p: 1,
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            mr: alternativeStyle ? 0 : 1,
          }}
        >
          {logo}
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ textAlign: alternativeStyle ? "center" : "left" }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{
              textAlign: alternativeStyle ? "center" : "left",
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
