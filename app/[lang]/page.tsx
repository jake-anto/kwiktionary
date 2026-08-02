import type { Metadata } from "next";
import ListPage from "./listPage";

export const metadata: Metadata = {
  title: "List of all entries - Kwiktionary",
  description:
    "A list of all entries in the Kwiktionary database. It contains over 1.2 million entries in English.",
};

export default function Page() {
  return <ListPage />;
}
