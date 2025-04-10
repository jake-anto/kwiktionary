import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Collapse,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChevronDown, CodeXml, House, Info, Scale } from "lucide-react";
import { Dispatch, useState } from "react";
import LogoText from "../../logo";
import { accordionData } from "./faqs";

export default function About({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Info />
            <Typography variant="h6">About</Typography>
          </Box>
          <div>
            <Tooltip title="Go to homepage">
              <IconButton
                href="/"
                LinkComponent={Link}
                onClick={() => setOpen(false)}
              >
                <House />
              </IconButton>
            </Tooltip>
            <Tooltip title="View license">
              <IconButton
                href="/about/license"
                LinkComponent={Link}
                onClick={() => setOpen(false)}
              >
                <Scale />
              </IconButton>
            </Tooltip>
            <Tooltip title="View source code">
              <IconButton
                href="https://github.com/jake-anto/kwiktionary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeXml />
              </IconButton>
            </Tooltip>
          </div>
        </Box>

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
