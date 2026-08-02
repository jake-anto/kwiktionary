"use client";

import { Button, Card, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card sx={{ p: 3, borderRadius: 5 }} variant="outlined">
      <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
        <Typography variant="h5" component="h1">
          Couldn&apos;t load this definition
        </Typography>
        <Typography color="text.secondary">
          Something went wrong while fetching the definition. This is usually
          temporary.
        </Typography>
        <Button onClick={reset} variant="outlined">
          Try again
        </Button>
      </Stack>
    </Card>
  );
}
