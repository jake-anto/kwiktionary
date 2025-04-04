import Header from "@/app/components/header/header";
import theme from "@/app/styles/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { API_URL } from "./utils/api";
import Footer from "./components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kwiktionary",
  description:
    "Fast, clean, and open-source access to the vast knowledge of Wiktionary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="dns-prefetch" href={API_URL} />
      <body
        className={inter.variable}
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline />
            <Header />
            <Container maxWidth="sm" sx={{ p: 2 }}>
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
