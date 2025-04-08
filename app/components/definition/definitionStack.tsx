import DefinitionComponent from "@/app/components/definition/definition";
import { Definition, Definitions } from "@/app/types/types";
import { getDefinition } from "@/app/utils/api";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DefinitionStackLoading from "./definitionStackLoading";
import Error from "../error";

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
      // Remove existing noindex meta tag if present
      document.querySelector("meta[name='robots']")?.remove();
      try {
        setDefinitions(await getDefinition(term));
      } catch (error) {
        // Check if the term is starts with an uppercase letter
        if (term[0].toUpperCase() === term[0]) {
          const newTerm = term[0].toLowerCase() + term.slice(1);
          // Redirect to the lowercase version of the term
          router.replace(`/en/${newTerm}`);
          return;
        }

        // Add noindex to the page
        if (!document.querySelector("meta[name='robots'][content='noindex']")) {
          const meta = document.createElement("meta");
          meta.name = "robots";
          meta.content = "noindex";
          document.head.appendChild(meta);
        }

        // Update title for the error
        document.title = `${error} - Kwiktionary`;
        setError(`Failed to fetch definition as ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDefinition();
  }, [term, setLoading, router]);

  // Update document title and meta description
  useEffect(() => {
    document.title = `${term} - Kwiktionary`;

    if (definitions?.definition) {
      document
        .querySelector("meta[name='description']")
        ?.setAttribute(
          "content",
          `The primary definition of ${term} is "${definitions?.definition[0]?.senses[0]?.glosses[0]}"`
        );
    }
  }, [term, definitions?.definition]);

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
