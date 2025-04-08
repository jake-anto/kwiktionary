export type Suggestions = string[];

// See https://github.com/tatuylonen/wiktextract?tab=readme-ov-file#translations
export type Translation = {
  alt?: string; // optional alternative form of the translation
  code: string; // Wiktionary's 2 or 3-letter language code
  english?: string; // English text clarifying the target sense
  lang: string; // the language name that the translation is for
  note?: string; // optional text describing or commenting on the translation
  roman?: string; // optional romanization of the translation
  sense?: string; // optional sense indicating the meaning
  tags?: string[]; // optional list of qualifiers for the translations
  taxonomic?: string; // optional taxonomic name
  word?: string; // the translation (may be missing when note is present)
};

export type Translations = Translation[];

// See https://github.com/tatuylonen/wiktextract?tab=readme-ov-file#pronunciation
export type Sound = {
  ipa?: string; // pronunciation specifications as an IPA string /.../ or [...]
  enpr?: string; // pronunciation in English pronunciation respelling
  audio?: string; // name of a sound file in WikiMedia Commons
  ogg_url?: string; // URL for an OGG Vorbis format sound file
  mp3_url?: string; // URL for an MP3 format sound file
  "audio-ipa"?: string; // IPA string associated with the audio file
  homophones?: string[]; // list of homophones for the word
  hyphenation?: string[]; // list of hyphenations
  tags?: string[]; // labels or context information for the pronunciation
  text?: string; // text associated with an audio file
};

export type Sounds = Sound[];

// See https://github.com/tatuylonen/wiktextract?tab=readme-ov-file#word-senses
export type Example = {
  text: string; // the example text
  ref?: string; // optional source reference
  english?: string; // optional English translation
  type?: string; // optional example type (example or quotation)
  roman?: string; // optional romanization for non-Latin scripts
  note?: string; // optional English-language parenthesized note
};

export type Examples = Example[];

export type Gloss = string;
export type Glosses = Gloss[];

export type Relation = {
  word: string; // the linked word
  extra?: string; // additional text (optional)
  tags?: string[]; // optional tags or qualifiers
};

export type Relations = Relation[];

export type Sense = {
  glosses: Glosses; // list of gloss strings (usually only one)
  raw_glosses?: string[]; // less-cleaned version of glosses
  tags?: string[]; // qualifiers and tags (e.g., "archaic", "colloquial")
  categories?: string[]; // sense-disambiguated category names
  topics?: string[]; // sense-disambiguated topic names

  alt_of?: Relations; // words this sense is an alternative form of
  form_of?: Relations; // words this sense is an inflected form of
  translations?: Translations; // sense-disambiguated translations
  synonyms?: Relations; // sense-disambiguated synonyms
  antonyms?: Relations; // sense-disambiguated antonyms
  hypernyms?: Relations; // sense-disambiguated hypernyms
  holonyms?: Relations; // sense-disambiguated holonyms
  meronyms?: Relations; // sense-disambiguated meronyms
  coordinate_terms?: Relations; // sense-disambiguated coordinate terms
  derived?: Relations; // sense-disambiguated derived words
  related?: Relations; // sense-disambiguated related words

  senseid?: string[]; // textual identifiers for the sense
  wikidata?: string[]; // QIDs for the sense (e.g., "Q123")
  wikipedia?: string[]; // Wikipedia page titles

  examples?: Examples; // usage examples

  english?: string; // unparsed qualifier (rare)
  links?: string[]; // links to other senses (e.g., "see also")
};

export type Senses = Sense[];

// Possible values are the keys of the PartsOfSpeechExpanded object
export type PartOfSpeech = string;

export type Form = {
  form: string; // the form of the word
  tags: string[]; // tags or qualifiers
};

export type Forms = Form[];

export type Etymology = string;

// See https://github.com/tatuylonen/wiktextract?tab=readme-ov-file#format-of-the-extracted-word-entries
export type Definition = {
  word: string; // the word form
  pos: PartOfSpeech; // part-of-speech
  lang: string; // language name (e.g., English)
  lang_code: string; // Wiktionary language code (e.g., en)

  senses: Senses; // list of word senses
  forms?: Forms; // inflected or alternative forms
  sounds?: Sounds; // pronunciation information

  categories?: string[]; // non-disambiguated categories
  topics?: string[]; // non-disambiguated topics
  translations?: Translations; // non-disambiguated translations

  etymology_text?: Etymology; // etymology section as text

  descendants?: Relations; // descendants of the word
  synonyms?: Relations; // non-disambiguated synonym linkages
  antonyms?: Relations; // non-disambiguated antonym linkages
  hypernyms?: Relations; // non-disambiguated hypernym linkages
  holonyms?: Relations; // non-disambiguated holonym linkages
  meronyms?: Relations; // non-disambiguated meronym linkages
  derived?: Relations; // non-disambiguated derived word linkages
  related?: Relations; // non-disambiguated related word linkages
  coordinate_terms?: Relations; // non-disambiguated coordinate term linkages

  wikidata?: string; // non-disambiguated Wikidata identifier
  wiktionary?: string; // non-disambiguated page title in Wikipedia
  wikipedia?: string[]; // ?? not documented
};

export type Definitions = {
  word: string; // the word from the query
  definition: Definition[]; // list of definitions for the word
  source: JSON; // source of the data
};

export type TermsList = string[]; // list of terms
export type Stats = {
  [lang: string]: number; // language code and number of terms
};
