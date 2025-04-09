import {
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import { CircleSmall } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "License | Kwiktionary",
  description:
    "This page explains the licenses governing the Kwiktionary application and the valuable linguistic data it uses.",
};

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <MuiLink target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </MuiLink>
  );
}

function ListIcon() {
  return (
    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
      <CircleSmall size={20} />
    </ListItemIcon>
  );
}

function KwiktionaryLicense() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Kwiktionary License
      </Typography>
      <Typography gutterBottom>
        Kwiktionary is an open-source project created and maintained by Jake
        Anto. It is licensed under the{" "}
        <Link href="https://github.com/jake-anto/kwiktionary/blob/dev/LICENSE">
          MIT License
        </Link>
        . You can find the source code on{" "}
        <Link href="https://github.com/jake-anto/kwiktionary">GitHub</Link>.
      </Typography>
    </Box>
  );
}

function WiktionaryLicense() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Wiktionary License
      </Typography>
      <Typography gutterBottom>
        The dictionary definitions, pronunciations, etymologies, and other
        linguistic data presented in Kwiktionary are derived from{" "}
        <Link href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">
          Wiktionary
        </Link>
        , a collaborative project created and edited by Wiktionary contributors.
      </Typography>
      <Typography>
        The original texts of Wiktionary entries are dual-licensed under:
      </Typography>
      <List sx={{ listStyleType: "disc", py: 0 }}>
        <ListItem>
          <ListIcon />
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon />
          <Link href="https://www.gnu.org/copyleft/fdl.html">
            GNU Free Documentation License
          </Link>
        </ListItem>
      </List>
      <Typography gutterBottom>
        For more information, see Wiktionary&apos;s{" "}
        <Link href="https://en.wiktionary.org/wiki/Wiktionary:Copyrights">
          copyright policy
        </Link>
        .
      </Typography>
    </Box>
  );
}

function WiktextractLicense() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Data extraction
      </Typography>
      <Typography gutterBottom>
        The linguistic data was processed and extracted from Wiktionary data
        dumps using the open-source tool{" "}
        <code>
          <Link href="https://github.com/tatuylonen/wiktextract">
            wiktextract
          </Link>
        </code>
        . The pre-extracted data is available at{" "}
        <Link href="https://kaikki.org/dictionary/rawdata.html">
          kaikki.org
        </Link>
        . Give them a star on GitHub!
      </Typography>
    </Box>
  );
}

function Disclaimers() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Disclaimers
      </Typography>
      <Typography gutterBottom>
        Kwiktionary is an independent project and is not affiliated with,
        sponsored, or endorsed by the{" "}
        <Link href="https://wikimediafoundation.org/">
          Wikimedia Foundation
        </Link>
        , the non-profit organization that operates Wiktionary. The use of data
        from Wiktionary is governed by the licenses mentioned above.
      </Typography>
      <Typography gutterBottom>
        All trademarks and copyrights are the property of their respective
        owners.
      </Typography>
    </Box>
  );
}

function Contact() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact
      </Typography>
      <Typography gutterBottom>
        For any queries, suggestions, or feedback regarding Kwiktionary, please{" "}
        <Link href="mailto:kwiktionary@apihost.site">use this email</Link> or{" "}
        <Link href="https://github.com/jake-anto/kwiktionary">GitHub</Link>.
      </Typography>
    </Box>
  );
}

export default function License() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        License
      </Typography>
      <Typography gutterBottom>
        Welcome to Kwiktionary! We believe in openness and transparency. This
        page explains the licenses governing the Kwiktionary application and the
        valuable linguistic data it uses.
      </Typography>
      <KwiktionaryLicense />
      <WiktionaryLicense />
      <WiktextractLicense />
      <Disclaimers />
      <Contact />
    </>
  );
}
