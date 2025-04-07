import { Box, SxProps, Typography } from "@mui/material";
import Highlighter from "react-highlight-words";

export default function BlockQuote({
  text,
  term,
  onDialog = false,
  sx,
}: {
  text: string;
  term: string;
  onDialog?: boolean;
  sx?: SxProps;
}) {
  return (
    <Box
      sx={{
        pl: 2,
        py: 0.3,
        borderLeft: "solid",
        borderColor: "primary.light",
        ...sx,
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: onDialog ? "text.primary" : "text.secondary" }}
      >
        <Highlighter
          textToHighlight={text}
          searchWords={[term]}
          highlightStyle={{
            fontWeight: "600",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        />
      </Typography>
    </Box>
  );
}
