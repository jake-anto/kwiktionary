import { cache } from "react";
import { Definitions, Stats, Suggestions, TermsList } from "../types/types";

export const API_URL = "http://35.209.17.14/v1/";

export const REVALIDATE_SECONDS = 86400; // 24 hours

export async function getSuggestions(prefix: string): Promise<Suggestions[]> {
  if (!prefix) {
    return [];
  }
  const response = await fetch(
    `${API_URL}search/en?q=${encodeURIComponent(prefix)}&limit=7`
  );
  return response.json();
}

// Cached per request so the page and its generateMetadata share one fetch
export const getDefinition = cache(async function getDefinition(
  lang: string,
  term: string
): Promise<Definitions | null> {
  if (!term) {
    return null;
  }
  const response = await fetch(
    `${API_URL}define/${lang}/${encodeURIComponent(term)}`,
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
});

export async function getListOfTerms(
  lang: string,
  limit: number,
  offset: number
): Promise<TermsList> {
  const response = await fetch(
    `${API_URL}list/${lang}?limit=${limit}&offset=${offset + 1}` // +1 to skip the first term " "
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function getStats(): Promise<Stats> {
  const response = await fetch(`${API_URL}stats`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}
