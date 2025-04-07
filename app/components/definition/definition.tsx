import PartOfSpeech from "@/app/components/definition/partOfSpeech";
import { type Definition, Relations as RelationsType } from "@/app/types/types";
import {
  Button,
  CardActions,
  Collapse,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { ChevronDown, Share2 } from "lucide-react";
import React, { useState } from "react";
import Etymology from "./etymology";
import Forms from "./forms";
import { Wikipedia } from "./icons";
import Relations from "./relations";
import Senses from "./senses";
import Sounds from "./sounds";
import Translations from "./translations";

export default function Definition({
  def,
  term,
}: {
  def: Definition;
  term: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleShare = () => {
    navigator
      .share({
        title: `Definition of ${term}`,
        text: `Definition of ${term} (${def.pos}): ${def.senses[0].glosses[0]} (Source: Wiktionary)`,
        url: window.location.href,
      })
      .catch((error) => console.error("Error sharing:", error));
  };

  return (
    <Card sx={{ p: 1.5, borderRadius: 5 }} variant="outlined">
      <Stack
        spacing={2}
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
      >
        <Box sx={{ flexShrink: 1, flexGrow: 0, minWidth: "25%" }}>
          {def.pos && <PartOfSpeech pos={def.pos} />}
          {def.translations && <Translations translations={def.translations} />}
          {def.forms && (
            <Box sx={{ my: 1 }}>
              <Forms forms={def.forms} />
            </Box>
          )}
        </Box>
        <Box sx={{ flexShrink: 0, flexGrow: 0, ml: 1 }}>
          {def.sounds && <Sounds sounds={def.sounds} />}
        </Box>
      </Stack>

      {def.senses && (
        <Box sx={{ mt: 2 }}>
          <Senses senses={def.senses} term={term} />
        </Box>
      )}
      <CardActions sx={{ justifyContent: "space-between" }}>
        <div>
          {def?.wikipedia && (
            <Tooltip title="View on Wikipedia">
              <IconButton
                href={`https://en.wikipedia.org/wiki/${def.wikipedia[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wikipedia link"
              >
                <Wikipedia />
              </IconButton>
            </Tooltip>
          )}
        </div>
        <div>
          {navigator.share !== undefined && (
            <IconButton onClick={handleShare} aria-label="share">
              <Share2 />
            </IconButton>
          )}

          {def?.synonyms ||
          def?.antonyms ||
          def?.hypernyms ||
          def?.holonyms ||
          def?.meronyms ||
          def?.derived ||
          def?.related ||
          def?.etymology_text ? (
            <Button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
              endIcon={
                <ChevronDown
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              }
            >
              {expanded ? "Hide" : "Show"} more
            </Button>
          ) : null}
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {[
            { key: "synonyms", title: "Synonyms" },
            { key: "antonyms", title: "Antonyms" },
            { key: "hypernyms", title: "Hypernyms" },
            { key: "holonyms", title: "Holonyms" },
            { key: "meronyms", title: "Meronyms" },
            { key: "derived", title: "Derived terms" },
            { key: "related", title: "Related terms" },
          ].map(({ key, title }, index: number) =>
            def?.[key as keyof Definition] ? (
              <React.Fragment key={index}>
                <Relations
                  relations={def[key as keyof Definition] as RelationsType}
                  title={title}
                />
                <Divider />
              </React.Fragment>
            ) : null
          )}
          {def?.etymology_text && <Etymology etymology={def.etymology_text} />}
        </CardContent>
      </Collapse>
    </Card>
  );
}
