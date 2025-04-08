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
  title: "List of all available terms - Kwiktionary",
  description: "List of all available terms in Kwiktionary.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
