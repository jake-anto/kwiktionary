import PartOfSpeech from "@/app/components/definition/partOfSpeech";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import { Button, CardActions, Collapse, Divider, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Etymology from "./etymology";
import Forms from "./forms";
import Relations from "./relations";
import Senses from "./senses";
import Sounds from "./sounds";
import Translations from "./translations";
import { type Definition, Relations as RelationsType } from "@/app/types/types";

export default function Definition({ def }: { def: Definition }) {
  const [expanded, setExpanded] = useState(false);

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
          <Senses senses={def.senses} />
        </Box>
      )}
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton>
          <ShareTwoToneIcon />
        </IconButton>
        <Button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
        >
          {expanded ? "Hide" : "Show"} more
        </Button>
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
                <Relations relations={def[key as keyof Definition] as RelationsType} title={title} />
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
