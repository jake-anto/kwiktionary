"use client";

import DefinitionStack from "@/app/components/definition/definitionStack";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useParams } from "next/navigation";

const Term = ({ term }: { term: string }) => (
  <Box>
    <Typography variant="h4" component="h1">
      {term}
    </Typography>
  </Box>
);

export default function DefinitionPage() {
  const term = decodeURIComponent(useParams().term as string);

  return (
    <Stack spacing={2}>
      <Term term={term} />
      <DefinitionStack term={term} />
    </Stack>
  );
}
