import FeatureCard from "@/app/components/home/featureCard";
import { Logo } from "@/app/components/logo";
import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Code2, LibraryBig, MonitorSmartphone, Rabbit } from "lucide-react";
import { Metadata } from "next";

const ICON_PROPS = {
  size: 52,
  strokeWidth: 1.5,
};

export const metadata: Metadata = {
  verification: {
    google: "Z8xPQKbPP1X-AgPtRFxRNfUTtL0XOjYpioc2tjmhUJA",
  },
};

export default function Home() {
  return (
    <>
      <Logo
        props={{ variant: "h1" }}
        styleProps={{
          fontSize: "2rem",
          textAlign: "center",
          mt: 0,
          mb: 3,
        }}
      />
      <Typography variant="body1">
        Tired of clunky dictionary sites? Kwiktionary harnesses the immense
        power of Wiktionary&apos;s <Link href="/en">1.2 million+ entries</Link>{" "}
        and presents them in a sleek, intuitive, and mobile-first design.
      </Typography>
      <Grid container spacing={1.5} sx={{ mt: 3 }}>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FeatureCard
            logo={<LibraryBig {...ICON_PROPS} />}
            title="1.2M+ Entries"
            description="Comprehensive definitions, pronunciations, synonyms, examples, and more."
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FeatureCard
            logo={<Rabbit {...ICON_PROPS} />}
            title="Modern & Fast"
            description="A clean interface that gets you the information you need without the clutter."
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FeatureCard
            logo={<Code2 {...ICON_PROPS} />}
            title="Open Source"
            description="No ads, just language. Built by the community, for the community."
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <FeatureCard
            logo={<MonitorSmartphone {...ICON_PROPS} />}
            title="Mobile Friendly"
            description="Designed to work beautifully and accessibly on phones, tablets, and desktops."
          />
        </Grid>
      </Grid>
    </>
  );
}
