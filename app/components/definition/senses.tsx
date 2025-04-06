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
  if (!links || Object.keys(links).length === 0) {
    return <Typography>{gloss}</Typography>;
  }

  const linkables: string[] = [];
  for (const key in links) {
    linkables.push(links[key][0]);
  }

  // Sort links by length descending to match longer terms first
  linkables.sort((a, b) => b.length - a.length);

  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // TODO: Find a better way to link partial matches
  const pattern = `\\b(${linkables.map(escapeRegExp).join("|")})\\b`;
  const regex = new RegExp(pattern, "g");

  const parts = gloss.split(regex).filter((part) => part); // filter removes empty strings

  return (
    <Typography>
      {parts.map((part, index) => {
        if (linkables.includes(part)) {
          return (
            <Link key={index} underline="hover" href={`/en/${part}`}>
              {part}
            </Link>
          );
        } else {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }
      })}
    </Typography>
  );
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
