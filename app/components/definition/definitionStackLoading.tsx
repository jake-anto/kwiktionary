import { Card, Skeleton, Stack } from "@mui/material";
import { ReactElement } from "react";

const skeletonWidths = ["75%", "55%", "35%", "65%", "85%", "45%", "55%"];

function SkeletonCard(): ReactElement {
  return (
    <Card sx={{ p: 1.5, borderRadius: 5 }} variant="outlined">
      <Stack spacing={1}>
        {skeletonWidths.map((width, index) => (
          <Skeleton key={index} variant="text" sx={{ width, height: 30 }} />
        ))}
      </Stack>
    </Card>
  );
}

interface DefinitionStackLoadingProps {
  cardCount?: number;
}

export default function DefinitionStackLoading({
  cardCount = 3,
}: DefinitionStackLoadingProps): ReactElement {
  return (
    <Stack spacing={2}>
      {Array.from({ length: cardCount }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Stack>
  );
}
