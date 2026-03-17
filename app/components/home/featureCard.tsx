"use client";

import { Box, Card, Typography } from "@mui/material";

export default function FeatureCard({
  logo,
  title,
  description,
}: {
  logo: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: { xs: "row", sm: "column" },
          p: 1,
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            mr: { xs: 1, sm: 0 },
          }}
        >
          {logo}
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: { xs: "left", sm: "center" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{
              textAlign: { xs: "left", sm: "center" },
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
