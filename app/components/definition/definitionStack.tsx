import DefinitionComponent from "@/app/components/definition/definition";
import { Definition, Definitions } from "@/app/types/types";
import Stack from "@mui/material/Stack";

export default function DefinitionStack({
  term,
  definitions,
}: {
  term: string;
  definitions?: Definitions;
}) {
  return (
    <Stack spacing={2}>
      {definitions && definitions.definition && (
        definitions.definition.map((def: Definition, index: number) => (
          <DefinitionComponent key={index} def={def} term={term} />
        ))
      )}
    </Stack>
  );
}
