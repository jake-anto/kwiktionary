import BlockQuote from "@/app/components/definition/blockquote";
import {
  Example,
  Sense,
  type Examples,
  type Gloss,
  type Senses,
} from "@/app/types/types";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import { ChevronRight } from "lucide-react";
import React from "react";

function Gloss({ gloss, links }: { gloss: Gloss; links?: string[] }) {
  const link_list: string[] = []; // Not a linked list, just an array of words to link

  if (links) {
    for (const key in links) {
      link_list.push(links[key][0]);
    }
    // TODO: Needs fixing as this separates the terms by space
    // and some terms have space in them
    return (
      <Typography>
        {gloss.split(" ").map((word: string, index: number) => {
          if (link_list.includes(word)) {
            return (
              <React.Fragment key={index}>
                <Link underline="hover" href={`/en/${word}`}>
                  {word}
                </Link>{" "}
              </React.Fragment>
            );
          } else {
            return <React.Fragment key={index}>{word} </React.Fragment>;
          }
        })}
      </Typography>
    );
  }
  return <Typography>{gloss}</Typography>;
}

function Examples({ examples, term }: { examples: Examples; term: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <BlockQuote text={examples[0].text} term={term} />
        <Box sx={{ px: 1 }}>
          <Tooltip title="References and more examples" arrow>
            <Button
              endIcon={<ChevronRight size="16px" />}
              size="small"
              onClick={() => setOpen(true)}
              aria-label="More examples"
            >
              More
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Examples</DialogTitle>
        <DialogContent>
          {examples.map((example: Example, index: number) => (
            <Box key={index} sx={{ my: 1 }}>
              <BlockQuote text={example.text} term={term} />
              {example.ref && (
                <Typography
                  component="div"
                  variant="caption"
                  sx={{ textAlign: "right", py: 0.5 }}
                >
                  {example.ref}
                </Typography>
              )}
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Senses({
  senses,
  term,
}: {
  senses: Senses;
  term: string;
}) {
  return (
    <List component="ol" sx={{ listStyleType: "decimal", pl: 4 }}>
      {senses.map((sense: Sense, index: number) => (
        <ListItem
          key={index}
          component="li"
          sx={{ display: "list-item", pl: 1 }}
        >
          {sense.glosses && (
            <Gloss gloss={sense.glosses[0]} links={sense.links} />
          )}
          {sense.examples && <Examples examples={sense.examples} term={term} />}
        </ListItem>
      ))}
    </List>
  );
}
