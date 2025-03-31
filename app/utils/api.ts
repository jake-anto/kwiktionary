import { Suggestions, Definitions } from "../types/types";

export const API_URL = "https://dict.apihost.site/v1/";

export async function getSuggestions(prefix: string): Promise<Suggestions[]> {
  if (!prefix) {
    return [];
  }
  const response = await fetch(
    `${API_URL}/search/en?q=${encodeURIComponent(prefix)}&limit=7`
  );
  return response.json();
}

export async function getDefinition(term: string): Promise<Definitions> {
  if (!term) {
    return {} as Definitions;
  }
  const response = await fetch(`${API_URL}/define/en/${term}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

//export const getSuggestions = debounce(_getSuggestions, 500);
