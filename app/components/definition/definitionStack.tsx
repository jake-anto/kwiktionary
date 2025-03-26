import DefinitionComponent from "@/app/components/definition/definition";
import { Definition, Definitions } from "@/app/types/types";
import { getDefinition } from "@/app/utls/api";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function DefinitionStack({ term }: { term: string }) {
  const [loading, setLoading] = useState(true);
  const [definitions, setDefinitions] = useState<Definitions>();

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        setDefinitions(await getDefinition(term));
      } catch (error) {
        console.error("Error fetching definition:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDefinition();
  }, [term]);

  return (
    <Stack spacing={2}>
      {!loading &&
        definitions &&
        definitions.definition &&
        definitions.definition.map((def: Definition, index: number) => (
          <DefinitionComponent key={index} def={def} />
        ))}
    </Stack>
  );
}
