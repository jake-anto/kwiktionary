import { getListOfTerms, getStats } from "@/app/utils/api";
import { Typography } from "@mui/material";
import { Metadata } from "next";
import { List } from "./clientList";

interface ListPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: ListPageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `All Entries (${lang}) | Kwiktionary`,
    description: `A list of all entries available in the ${lang} language.`,
  };
}

export default async function ListPage({ params }: ListPageProps) {
  const { lang } = await params;
  let amountTerms = 0;
  let initialRows = [];

  const stats = await getStats();
  if (lang in stats) {
    amountTerms = stats[lang];
    initialRows = await getListOfTerms(lang, 10, 0);
  } else {
    throw new Error(`Language ${lang} is not supported`);
  }

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        List of all entries
      </Typography>
      <List amountTerms={amountTerms} lang={lang} initialRows={initialRows} />
    </>
  );
}
