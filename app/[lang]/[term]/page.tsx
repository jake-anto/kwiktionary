"use client";

import DefinitionStack from "@/app/components/definition/definitionStack";
import Term from "@/app/components/definition/term";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function DefinitionPage() {
  const [loading, setLoading] = useState(true);
  const term = decodeURIComponent(useParams().term as string);

  return (
    <Stack spacing={2}>
      <Term term={term} loading={loading} />
      <DefinitionStack term={term} loading={loading} setLoading={setLoading} />
    </Stack>
  );
}

export const runtime = "edge";
