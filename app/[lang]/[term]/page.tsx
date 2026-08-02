import DefinitionComponent from "@/app/components/definition/definition";
import Term from "@/app/components/definition/term";
import { Definition } from "@/app/types/types";
import { getDefinition } from "@/app/utils/api";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

export const revalidate = 86400;

type Params = Promise<{ lang: string; term: string }>;

async function resolve(params: Params) {
  const { lang, term } = await params;
  return { lang, term: decodeURIComponent(term) };
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang, term } = await resolve(params);
  const data = await getDefinition(lang, term).catch(() => null);

  const gloss = data?.definition?.[0]?.senses?.[0]?.glosses?.[0];
  const title = `${term} Definition | Kwiktionary`;
  const description = gloss
    ? `Definition of ${term}: "${gloss}" | See synonyms, antonyms, and more at Kwiktionary.`
    : `Definition of ${term} | See synonyms, antonyms, and more at Kwiktionary.`;

  return {
    title,
    description,
    alternates: { canonical: `/${lang}/${term}` },
    openGraph: { title, description },
  };
}

export default async function DefinitionPage({ params }: { params: Params }) {
  const { lang, term } = await resolve(params);
  const data = await getDefinition(lang, term);

  // notFound()/permanentRedirect() throw, so they must stay out of a try/catch
  if (!data?.definition?.length) {
    if (term[0] && term[0] !== term[0].toLowerCase()) {
      permanentRedirect(`/${lang}/${term[0].toLowerCase() + term.slice(1)}`);
    }
    notFound();
  }

  return (
    <Stack spacing={2}>
      <Term term={term} />
      {data.definition.map((def: Definition, index: number) => (
        <DefinitionComponent key={index} def={def} term={term} lang={lang} />
      ))}
    </Stack>
  );
}
