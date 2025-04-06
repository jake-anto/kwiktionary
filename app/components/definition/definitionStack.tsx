import DefinitionComponent from "@/app/components/definition/definition";
import { Definition, Definitions } from "@/app/types/types";
import { getDefinition } from "@/app/utils/api";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        setDefinitions(await getDefinition(term));
      } catch (error) {
        // Check if the term is capitalized
        // If so, try to fetch the definition with a lowercase term
        if (term[0].toUpperCase() === term[0]) {
          const newTerm = term[0].toLowerCase() + term.slice(1);
          setError(
            `Something went wrong, attempting to fetch definition as ${newTerm}`
          );
          router.replace(`/en/${newTerm}`);
        }
        // Add noindex to the page
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
        setError(`Failed to fetch definition as ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDefinition();
  }, [term, setLoading, router]);

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
