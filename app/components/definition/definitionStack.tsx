import DefinitionComponent from "@/app/components/definition/definition";
import { Definition, Definitions } from "@/app/types/types";
import { getDefinition } from "@/app/utils/api";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import DefinitionStackLoading from "./definitionStackLoading";
import Error from "./error";

export default function DefinitionStack({
  term,
  loading,
  setLoading,
}: {
  term: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}) {
  const [definitions, setDefinitions] = useState<Definitions>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        setDefinitions(await getDefinition(term));
      } catch (error) {
        setError(`Failed to fetch definition as ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDefinition();
  }, [term, setLoading]);

  return (
    <>
      <Stack spacing={2}>
        {!loading && definitions && definitions.definition ? (
          definitions.definition.map((def: Definition, index: number) => (
            <DefinitionComponent key={index} def={def} term={term} />
          ))
        ) : (
          <DefinitionStackLoading />
        )}
      </Stack>
      {error && <Error error={error} setError={setError} />}
    </>
  );
}
