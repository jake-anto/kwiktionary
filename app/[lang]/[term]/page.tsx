import DefinitionStack from "@/app/components/definition/definitionStack";
import Term from "@/app/components/definition/term";
import { getDefinition } from "@/app/utils/api";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface DefinitionPageProps {
  params: Promise<{ term: string; lang: string }>;
}

export async function generateMetadata({
  params,
}: DefinitionPageProps): Promise<Metadata> {
  const { term: encodedTerm } = await params;
  const term = decodeURIComponent(encodedTerm);

  try {
    const definitions = await getDefinition(term);
    const description =
      definitions?.definition?.[0]?.senses?.[0]?.glosses?.[0]
        ? `Definition of ${term}: "${definitions.definition[0].senses[0].glosses[0]}" | See synonyms, antonyms, and more at Kwiktionary.`
        : `Definition of ${term} at Kwiktionary.`;

    return {
      title: `${term} Definition | Kwiktionary`,
      description,
    };
  } catch (error) {
    return {
      title: `${error} - Kwiktionary`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function DefinitionPage({
  params,
}: DefinitionPageProps) {
  const { term: encodedTerm } = await params;
  const term = decodeURIComponent(encodedTerm);

  if (term[0].toUpperCase() === term[0]) {
    const newTerm = term[0].toLowerCase() + term.slice(1);
    redirect(`/en/${newTerm}`);
  }

  const definitions = await getDefinition(term);

  return (
    <Stack spacing={2}>
      <Term term={term} loading={false} />
      <DefinitionStack definitions={definitions} term={term} />
    </Stack>
  );
}

export const runtime = "edge";
