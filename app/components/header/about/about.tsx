import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Collapse,
  Link,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import LogoText from "../../logo";
import { accordionData } from "./faqs";

export default function About({ open }: { open: boolean }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  return (
    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        px: 2,
        display: "flex",
        justifyContent: "center",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <Card sx={{ maxWidth: 396, mx: "auto", width: "100%" }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          About
        </Typography>
        <Typography variant="body2" sx={{ px: 2, pb: 2 }}>
          <Link href="/">
            <LogoText
              text="K"
              props={{
                component: "span",
              }}
            />
            wiktionary
          </Link>{" "}
          delivers the comprehensive language data you expect from Wiktionary,
          wrapped in a lightning-fast, user-friendly package.
        </Typography>
        <Box sx={{ px: 2, pb: 2 }}>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              variant="outlined"
              disableGutters
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{ border: "none", backgroundColor: "transparent" }}
            >
              <AccordionSummary expandIcon={<ChevronDown />}>
                <Typography variant="body2">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Card>
    </Collapse>
  );
}
