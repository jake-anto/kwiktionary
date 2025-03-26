import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";

// TODO: complete this from wiktextract.PART_OF_SPEECH
const PartsOfSpeechExpanded: { [key: string]: string } = {
  noun: "noun",
  verb: "verb",
  adj: "adjective",
  adv: "adverb",
  pron: "pronoun",
  prep: "preposition",
  conj: "conjunction",
  intj: "interjection",
  postp: "postposition",
  abbrev: "abbreviation",
  name: "name",
  phrase: "phrase",
};

const PartOfSpeechExplanation: { [key: string]: string } = {
  noun: "A noun is a word that refers to a person, place, thing, event, substance, or quality.",
  verb: "A verb is a word that describes an action, state, or occurrence.",
  adj: "An adjective is a word that describes or modifies a noun.",
  adv: "An adverb is a word that modifies an adjective, verb, or other adverb.",
  pron: "A pronoun is a word that can function as a noun phrase.",
  prep: "A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence.",
  conj: "A conjunction is a word that connects words, phrases, or clauses.",
  intj: "An interjection is a word or phrase that expresses emotion or exclamation.",
  postp:
    "A postposition is a word that shows the relationship between a noun or pronoun and other words in a sentence.",
  abbrev: "An abbreviation is a shortened form of a word or phrase.",
  name: "A name is a word that identifies a person, place, or thing.",
  phrase:
    "A phrase is a small group of words that forms a meaningful unit within a clause.",
};

export default function PartOfSpeech({ pos }: { pos: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Chip
        label={PartsOfSpeechExpanded[pos] || pos}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {"Definition of "}
          {PartsOfSpeechExpanded[pos].charAt(0).toUpperCase() +
            PartsOfSpeechExpanded[pos].slice(1)}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {PartOfSpeechExplanation[pos] || "No definition available."}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
