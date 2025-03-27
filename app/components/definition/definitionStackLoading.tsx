import { Card, Skeleton, Stack } from "@mui/material";

function SkeletonCard() {
  return (
    <Card sx={{ p: 1.5, borderRadius: 5 }} variant="outlined">
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ width: "75%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "55%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "35%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "65%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "85%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "45%", height: 30 }} />
        <Skeleton variant="text" sx={{ width: "55%", height: 30 }} />
      </Stack>
    </Card>
  );
}

export default function DefinitionStackLoading() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(<SkeletonCard key={i} />);
  }
  return <Stack spacing={2}>{cards}</Stack>;
}
