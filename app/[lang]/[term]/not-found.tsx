import { Button, Card, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term not found - Kwiktionary",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Card sx={{ p: 3, borderRadius: 5 }} variant="outlined">
      <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
        <Typography variant="h5" component="h1">
          No definition found
        </Typography>
        <Typography color="text.secondary">
          We couldn&apos;t find an entry for this term. Check the spelling, or
          try searching for something else.
        </Typography>
        <Button href="/" variant="outlined">
          Back to home
        </Button>
      </Stack>
    </Card>
  );
}
