import { Box, Skeleton, Typography } from "@mui/material";

export default function Term({
  term,
  loading,
}: {
  term?: string;
  loading: boolean;
}) {
  return (
    <Box>
      <Typography variant="h4" component="h1">
        {loading ? <Skeleton sx={{ width: "50%" }} /> : term}
      </Typography>
    </Box>
  );
}
