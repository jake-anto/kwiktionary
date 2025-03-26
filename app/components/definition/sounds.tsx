import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { Sound, type Sounds } from "@/app/types/types";

const Accents: { [key: string]: string } = {
  UK: "en-uk",
  US: "en-us",
};

export default function Sounds({ sounds }: { sounds: Sounds }) {
  const getPronunciation = (accent: string, preference: string) => {
    const sound = sounds.find(
      (sound: Sound) =>
        sound?.tags && sound.tags[0] === accent && (sound?.ipa || sound?.enpr)
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

  console.log(getPronunciation("US", "ipa"), getSound("UK"));

  const playSound = (location: string) => {
    const audio = new Audio(location);
    audio.play();
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
                {pronunciation && pronunciation[1]}
              </Typography>
              {sound && (
                <Tooltip title="Play audio pronunciation" placement="top" arrow>
                  <IconButton
                    aria-label="Play audio pronunciation"
                    size="small"
                    onClick={() => playSound(sound[1] as string)}
                  >
                    <VolumeUpIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )
      )}
    </>
  );
}
