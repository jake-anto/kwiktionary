import { Box, SxProps, Typography } from "@mui/material";
import Highlighter from "react-highlight-words";

export default function BlockQuote({
  text,
  term,
  sx,
}: {
  text: string;
  term: string;
  sx?: SxProps;
}) {
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
