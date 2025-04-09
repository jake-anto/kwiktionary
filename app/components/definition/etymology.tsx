import { type Etymology } from "@/app/types/types";
import { Box, Typography } from "@mui/material";

export default function Etymology({ etymology }: { etymology: Etymology }) {
  return (
    <Box>
      <Typography variant="h6">Etymology</Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
        }}
      >
        {etymology}
      </Typography>
    </Box>
  );
}
