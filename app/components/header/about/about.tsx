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
import { Dispatch, useCallback, useState } from "react";
import LogoText from "../../logo";
import { accordionData } from "./faqs";

const linkData = [
  {
    title: "Go to homepage",
    icon: <House />,
    href: "/",
  },
  {
    title: "View license",
    icon: <Scale />,
    href: "/about/license",
  },
  {
    title: "View source code",
    icon: <CodeXml />,
    href: "https://github.com/jake-anto/kwiktionary",
    additionalProps: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
];

export default function About({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = useCallback(
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    },
    []
  );

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
            {linkData.map((link, index) => {
              const { title, icon, href, additionalProps } = link;
              return (
                <Tooltip key={index} title={title}>
                  <IconButton
                    href={href}
                    LinkComponent={Link}
                    onClick={() => setOpen(false)}
                    {...additionalProps}
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                </Tooltip>
              );
            })}
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
