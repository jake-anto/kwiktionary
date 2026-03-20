import DefinitionStackLoading from "@/app/components/definition/definitionStackLoading";
import Term from "@/app/components/definition/term";
import { Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack spacing={2}>
      <Term loading />
      <DefinitionStackLoading />
    </Stack>
  );
}
