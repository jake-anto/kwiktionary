import { Link } from "@mui/material";

interface AccordionData {
  question: string;
  answer: React.ReactNode;
}

export const accordionData: AccordionData[] = [
  {
    question: "Where does the dictionary data come from? ",
    answer: (
      <>
        All linguistic data is sourced from the collaborative project{" "}
        <Link
          href="https://en.wiktionary.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiktionary
        </Link>
        .
      </>
    ),
  },
  {
    question: "What if a definition is wrong or missing?",
    answer: (
      <>
        Check the original entry on{" "}
        <Link
          href="https://en.wiktionary.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiktionary
        </Link>
        . If the error is there, please consider correcting it on Wiktionary
        itself.
      </>
    ),
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: (
      <>
        Please use the the{" "}
        <Link
          href="https://github.com/jake-anto/kwiktionary/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          issue tracker
        </Link>
        . We appreciate your feedback!
      </>
    ),
  },
  {
    question: "What is the license for the data?",
    answer: (
      <>
        See the <Link href="/about/license">license page</Link> for that.
      </>
    ),
  },
];
