import {
  Example,
  Sense,
  type Examples,
  type Gloss,
  type Senses,
} from "@/app/types/types";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  SxProps,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";

function BlockQuote({ text, sx }: { text: string; sx?: SxProps }) {
  return (
    <Box
      sx={{
        pl: 2,
        py: 0.3,
        borderLeft: "solid",
        borderColor: "grey.500",
        ...sx,
      }}
    >
      <Typography variant="body2">
        <em>{text}</em>
      </Typography>
    </Box>
  );
}

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

function Examples({ examples }: { examples: Examples }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <BlockQuote text={examples[0].text} />
        <Box sx={{ px: 1 }}>
          <Tooltip title="References and more examples" arrow>
            <Button
              endIcon={<NavigateNextTwoToneIcon />}
              size="small"
              onClick={() => setOpen(true)}
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
              <BlockQuote text={example.text} />
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

export default function Senses({ senses }: { senses: Senses }) {
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
          {sense.examples && <Examples examples={sense.examples} />}
        </ListItem>
      ))}
    </List>
  );
}
