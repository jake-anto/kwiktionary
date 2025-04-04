import { SxProps, Typography, TypographyProps } from "@mui/material";
import { Major_Mono_Display } from "next/font/google";

const LogoFont = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function LogoText({
  text,
  props,
  styleProps,
}: {
  text: string;
  props?: TypographyProps;
  styleProps?: SxProps;
}) {
  return (
    <Typography
      sx={{
        color: "primary.main",
        fontFamily: LogoFont.style.fontFamily,
        ...styleProps,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
}

export function Logo({
  props,
  styleProps,
}: {
  props?: TypographyProps;
  styleProps?: SxProps;
}) {
  return <LogoText props={props} styleProps={styleProps} text="Kwiktionary" />;
}
