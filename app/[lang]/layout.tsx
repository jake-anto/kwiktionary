import { Metadata } from "next";
import { getStats } from "../utils/api";

export async function generateStaticParams() {
  const stats = await getStats();
  const langs = Object.keys(stats);
  return langs.map((lang) => ({
    lang,
  }));
}

export const metadata: Metadata = {
  title: "List of all entries - Kwiktionary",
  description:
    "A list of all entries in the Kwiktionary database. It contains over 1.2 million entries in English.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
