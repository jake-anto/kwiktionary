import { Suggestions, Definitions } from "../types/types";

const API_URL = "https://dict.apihost.site/v1/";

export function getSuggestions(prefix: string): Promise<Suggestions[]> {
  if (!prefix) {
    return Promise.resolve([]);
  }
  return fetch(
    `${API_URL}/search/en?q=${encodeURIComponent(prefix)}&limit=7`
  ).then((response) => response.json());
}

export function getDefinition(term: string): Promise<Definitions> {
  if (!term) {
    return Promise.resolve({} as Definitions);
  }
  return fetch(`${API_URL}/define/en/${term}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

//export const getSuggestions = debounce(_getSuggestions, 500);
