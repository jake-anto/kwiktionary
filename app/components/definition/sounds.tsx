import { Sound, type Sounds } from "@/app/types/types";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Volume2 } from "lucide-react";

const Accents: { [key: string]: string } = {
  UK: "en-uk",
  US: "en-us",
};

const AlternativeAccents: { [key: string]: string } = {
  UK: "Received-Pronunciation",
  US: "General-American",
};

function playSound(url: string) {
  return () => {
    const audio = new Audio(url);
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };
}

export default function Sounds({ sounds }: { sounds: Sounds }) {
  const getPronunciation = (accent: string, preference: string) => {
    const sound = sounds.find(
      (sound: Sound) =>
        (sound?.tags && sound.tags[0] === accent) ||
        (AlternativeAccents[accent] && (sound?.ipa || sound?.enpr))
    );

    if (!sound) return null;

    return preference === "ipa" && sound?.ipa
      ? [accent, sound?.ipa]
      : [accent, sound?.enpr];
  };

  const getSound = (accent: string) => {
    const sound = sounds.find(
      (sound: Sound) =>
        sound?.audio && sound?.audio.toLowerCase().startsWith(Accents[accent])
    );

    return sound ? [accent, sound.mp3_url] : null;
  };

  const data = [
    { pronunciation: getPronunciation("UK", "ipa"), sound: getSound("UK") },
    { pronunciation: getPronunciation("US", "ipa"), sound: getSound("US") },
  ];
  return (
    <>
      {data.map(
        ({ pronunciation, sound }, index) =>
          (pronunciation || sound) && (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
              >
                <b>{pronunciation?.[0] || sound?.[0]} </b>
                {pronunciation?.[1]}
              </Typography>
              {sound && (
                <Tooltip title="Play audio pronunciation" placement="top" arrow>
                  <IconButton
                    aria-label="Play audio pronunciation"
                    size="small"
                    onClick={playSound(sound[1] as string)}
                  >
                    <Volume2 />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )
      )}
    </>
  );
}
