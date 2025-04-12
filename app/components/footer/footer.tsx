import { Box, Button, Link, Typography } from "@mui/material";
import { Github } from "lucide-react";
import { Logo } from "../logo";
import Donate from "./donate/donate";

const LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: "center", mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Definitions, pronunciations, and other linguistic data are provided by{" "}
          <Link href="https://www.wiktionary.org/" {...LINK_PROPS}>
            Wiktionary
          </Link>{" "}
          contributors.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This content is available under{" "}
          <Link
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            {...LINK_PROPS}
          >
            CC BY-SA 4.0
          </Link>{" "}
          and{" "}
          <Link href="https://www.gnu.org/copyleft/fdl.html" {...LINK_PROPS}>
            GFDL
          </Link>
          .
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Logo props={{ component: "span" }} /> is an independent open-source
          project licensed under the{" "}
          <Link
            href="https://github.com/jake-anto/kwiktionary/blob/dev/LICENSE"
            {...LINK_PROPS}
          >
            MIT License
          </Link>
          .
        </Typography>{" "}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Kwiktionary is not affiliated with, sponsored, or endorsed by the
          Wikimedia Foundation, the operator of Wiktionary.
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Button
          startIcon={<Github />}
          aria-label="View source code at GitHub"
          href="https://github.com/jake-anto/kwiktionary"
          variant="outlined"
          {...LINK_PROPS}
          sx={{
            mx: 0.5,
            mb: 1,
          }}
        >
          Source Code
        </Button>
        <Donate />
      </Box>
      <Typography sx={{ color: "text.secondary" }}>
        Made with ❤️ by{" "}
        <Link href="https://github.com/jake-anto" {...LINK_PROPS}>
          Jake Anto
        </Link>
      </Typography>
    </Box>
  );
}
