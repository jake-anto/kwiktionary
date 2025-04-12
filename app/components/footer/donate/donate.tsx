"use client";

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Heart } from "lucide-react";
import { useCallback, useState } from "react";

const BOX_PROPS: BoxProps = {
  sx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    my: 2,
  },
};

const BUTTON_PROPS: ButtonProps = {
  component: "a",
  size: "medium",
  variant: "contained",
  color: "error",
  startIcon: <Heart />,
  rel: "noopener",
  sx: {
    boxShadow: "none",
  },
};

export default function Donate() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        startIcon={<Heart />}
        aria-label="Donate to the project"
        variant="outlined"
        color="error"
        onClick={handleOpen}
        sx={{
          mx: 0.5,
          mb: 1,
        }}
      >
        Donate
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Donate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kwiktionary is powered by data from Wiktionary, a project of the
            non-profit Wikimedia Foundation. You can help them continue their
            essential work:
          </DialogContentText>
          <Box {...BOX_PROPS}>
            <Button
              href="https://donate.wikimedia.org/wiki/Ways_to_Give"
              {...BUTTON_PROPS}
            >
              Donate to Wikimedia
            </Button>
          </Box>
          <DialogContentText>
            To help cover Kwiktionary&apos;s hosting, domain, and development
            costs, please consider sponsoring:
          </DialogContentText>
          <Box {...BOX_PROPS}>
            <Button
              href="https://github.com/sponsors/jake-anto"
              {...BUTTON_PROPS}
            >
              Sponsor on GitHub
            </Button>
          </Box>
          <DialogContentText>
            Your support for either helps keep valuable language resources
            available!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
