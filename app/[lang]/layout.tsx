import { getStats } from "../utils/api";

export async function generateStaticParams() {
  const stats = await getStats();
  const langs = Object.keys(stats);
  return langs.map((lang) => ({
    lang,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
