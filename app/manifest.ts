import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kwiktionary",
    short_name: "Kwiktionary",
    description:
      "Fast, clean, and open-source access to the vast knowledge of Wiktionary.",
    start_url: "/",
    display: "standalone",
    theme_color: "rgb(255, 196, 0)",
    screenshots: [
      {
        src: "screenshots/phone-dark-home.png",
        sizes: "1081x2404",
        type: "image/png",
        label: "Home screen",
      },
      {
        src: "screenshots/phone-light-home.png",
        sizes: "1081x2404",
        type: "image/png",
        label: "Home screen, but light mode.",
      },
      {
        src: "screenshots/phone-dark-term.png",
        sizes: "1081x2404",
        type: "image/png",
        label: "Definition screen, now that is sleek.",
      },
      {
        src: "screenshots/phone-light-term.png",
        sizes: "1081x2404",
        type: "image/png",
        label: "Definition screen, but my eyes hurt.",
      },
      {
        src: "screenshots/wide-dark.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide",
        label: "Wide screen, dark mode.",
      },
      {
        src: "screenshots/wide-light.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide",
        label: "Wide screen, light mode.",
      },
    ],
    icons: [
      {
        src: "icons/monochrome/windows11/SmallTile.scale-100.png",
        sizes: "71x71",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SmallTile.scale-125.png",
        sizes: "89x89",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SmallTile.scale-150.png",
        sizes: "107x107",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SmallTile.scale-200.png",
        sizes: "142x142",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SmallTile.scale-400.png",
        sizes: "284x284",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square150x150Logo.scale-125.png",
        sizes: "188x188",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square150x150Logo.scale-150.png",
        sizes: "225x225",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square150x150Logo.scale-200.png",
        sizes: "300x300",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square150x150Logo.scale-400.png",
        sizes: "600x600",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Wide310x150Logo.scale-100.png",
        sizes: "310x150",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Wide310x150Logo.scale-125.png",
        sizes: "388x188",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Wide310x150Logo.scale-150.png",
        sizes: "465x225",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Wide310x150Logo.scale-200.png",
        sizes: "620x300",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Wide310x150Logo.scale-400.png",
        sizes: "1240x600",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/LargeTile.scale-100.png",
        sizes: "310x310",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/LargeTile.scale-125.png",
        sizes: "388x388",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/LargeTile.scale-150.png",
        sizes: "465x465",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/LargeTile.scale-200.png",
        sizes: "620x620",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/LargeTile.scale-400.png",
        sizes: "1240x1240",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.scale-100.png",
        sizes: "44x44",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.scale-125.png",
        sizes: "55x55",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.scale-150.png",
        sizes: "66x66",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.scale-200.png",
        sizes: "88x88",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.scale-400.png",
        sizes: "176x176",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/StoreLogo.scale-100.png",
        sizes: "50x50",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/StoreLogo.scale-125.png",
        sizes: "63x63",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/StoreLogo.scale-150.png",
        sizes: "75x75",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/StoreLogo.scale-200.png",
        sizes: "100x100",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/StoreLogo.scale-400.png",
        sizes: "200x200",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SplashScreen.scale-100.png",
        sizes: "620x300",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SplashScreen.scale-125.png",
        sizes: "775x375",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SplashScreen.scale-150.png",
        sizes: "930x450",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SplashScreen.scale-200.png",
        sizes: "1240x600",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/SplashScreen.scale-400.png",
        sizes: "2480x1200",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-16.png",
        sizes: "16x16",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-20.png",
        sizes: "20x20",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-24.png",
        sizes: "24x24",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-30.png",
        sizes: "30x30",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-32.png",
        sizes: "32x32",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-36.png",
        sizes: "36x36",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-40.png",
        sizes: "40x40",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-44.png",
        sizes: "44x44",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-48.png",
        sizes: "48x48",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-60.png",
        sizes: "60x60",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-64.png",
        sizes: "64x64",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-72.png",
        sizes: "72x72",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-80.png",
        sizes: "80x80",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-96.png",
        sizes: "96x96",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.targetsize-256.png",
        sizes: "256x256",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-512-512.png",
        sizes: "512x512",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-192-192.png",
        sizes: "192x192",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-144-144.png",
        sizes: "144x144",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-96-96.png",
        sizes: "96x96",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-72-72.png",
        sizes: "72x72",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/android/android-launchericon-48-48.png",
        sizes: "48x48",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/16.png",
        sizes: "16x16",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/20.png",
        sizes: "20x20",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/29.png",
        sizes: "29x29",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/32.png",
        sizes: "32x32",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/40.png",
        sizes: "40x40",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/50.png",
        sizes: "50x50",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/57.png",
        sizes: "57x57",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/58.png",
        sizes: "58x58",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/60.png",
        sizes: "60x60",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/64.png",
        sizes: "64x64",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/72.png",
        sizes: "72x72",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/76.png",
        sizes: "76x76",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/80.png",
        sizes: "80x80",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/87.png",
        sizes: "87x87",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/100.png",
        sizes: "100x100",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/114.png",
        sizes: "114x114",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/120.png",
        sizes: "120x120",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/128.png",
        sizes: "128x128",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/144.png",
        sizes: "144x144",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/152.png",
        sizes: "152x152",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/167.png",
        sizes: "167x167",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/180.png",
        sizes: "180x180",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/192.png",
        sizes: "192x192",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/256.png",
        sizes: "256x256",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/512.png",
        sizes: "512x512",
        purpose: "monochrome",
      },
      {
        src: "icons/monochrome/ios/1024.png",
        sizes: "1024x1024",
        purpose: "monochrome",
      },
      {
        src: "icons/maskable/windows11/SmallTile.scale-100.png",
        sizes: "71x71",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SmallTile.scale-125.png",
        sizes: "89x89",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SmallTile.scale-150.png",
        sizes: "107x107",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SmallTile.scale-200.png",
        sizes: "142x142",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SmallTile.scale-400.png",
        sizes: "284x284",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square150x150Logo.scale-125.png",
        sizes: "188x188",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square150x150Logo.scale-150.png",
        sizes: "225x225",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square150x150Logo.scale-200.png",
        sizes: "300x300",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square150x150Logo.scale-400.png",
        sizes: "600x600",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Wide310x150Logo.scale-100.png",
        sizes: "310x150",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Wide310x150Logo.scale-125.png",
        sizes: "388x188",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Wide310x150Logo.scale-150.png",
        sizes: "465x225",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Wide310x150Logo.scale-200.png",
        sizes: "620x300",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Wide310x150Logo.scale-400.png",
        sizes: "1240x600",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/LargeTile.scale-100.png",
        sizes: "310x310",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/LargeTile.scale-125.png",
        sizes: "388x388",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/LargeTile.scale-150.png",
        sizes: "465x465",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/LargeTile.scale-200.png",
        sizes: "620x620",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/LargeTile.scale-400.png",
        sizes: "1240x1240",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.scale-100.png",
        sizes: "44x44",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.scale-125.png",
        sizes: "55x55",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.scale-150.png",
        sizes: "66x66",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.scale-200.png",
        sizes: "88x88",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.scale-400.png",
        sizes: "176x176",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/StoreLogo.scale-100.png",
        sizes: "50x50",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/StoreLogo.scale-125.png",
        sizes: "63x63",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/StoreLogo.scale-150.png",
        sizes: "75x75",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/StoreLogo.scale-200.png",
        sizes: "100x100",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/StoreLogo.scale-400.png",
        sizes: "200x200",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SplashScreen.scale-100.png",
        sizes: "620x300",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SplashScreen.scale-125.png",
        sizes: "775x375",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SplashScreen.scale-150.png",
        sizes: "930x450",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SplashScreen.scale-200.png",
        sizes: "1240x600",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/SplashScreen.scale-400.png",
        sizes: "2480x1200",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-16.png",
        sizes: "16x16",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-20.png",
        sizes: "20x20",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-24.png",
        sizes: "24x24",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-30.png",
        sizes: "30x30",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-32.png",
        sizes: "32x32",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-36.png",
        sizes: "36x36",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-40.png",
        sizes: "40x40",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-44.png",
        sizes: "44x44",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-48.png",
        sizes: "48x48",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-60.png",
        sizes: "60x60",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-64.png",
        sizes: "64x64",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-72.png",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-80.png",
        sizes: "80x80",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-96.png",
        sizes: "96x96",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.targetsize-256.png",
        sizes: "256x256",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-512-512.png",
        sizes: "512x512",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-192-192.png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-144-144.png",
        sizes: "144x144",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-96-96.png",
        sizes: "96x96",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-72-72.png",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/android/android-launchericon-48-48.png",
        sizes: "48x48",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/16.png",
        sizes: "16x16",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/20.png",
        sizes: "20x20",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/29.png",
        sizes: "29x29",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/32.png",
        sizes: "32x32",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/40.png",
        sizes: "40x40",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/50.png",
        sizes: "50x50",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/57.png",
        sizes: "57x57",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/58.png",
        sizes: "58x58",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/60.png",
        sizes: "60x60",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/64.png",
        sizes: "64x64",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/72.png",
        sizes: "72x72",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/76.png",
        sizes: "76x76",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/80.png",
        sizes: "80x80",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/87.png",
        sizes: "87x87",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/100.png",
        sizes: "100x100",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/114.png",
        sizes: "114x114",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/120.png",
        sizes: "120x120",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/128.png",
        sizes: "128x128",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/144.png",
        sizes: "144x144",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/152.png",
        sizes: "152x152",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/167.png",
        sizes: "167x167",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/180.png",
        sizes: "180x180",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/192.png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/256.png",
        sizes: "256x256",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/512.png",
        sizes: "512x512",
        purpose: "maskable",
      },
      {
        src: "icons/maskable/ios/1024.png",
        sizes: "1024x1024",
        purpose: "maskable",
      },
      {
        src: "icons/windows11/SmallTile.scale-100.png",
        sizes: "71x71",
        purpose: "any",
      },
      {
        src: "icons/windows11/SmallTile.scale-125.png",
        sizes: "89x89",
        purpose: "any",
      },
      {
        src: "icons/windows11/SmallTile.scale-150.png",
        sizes: "107x107",
        purpose: "any",
      },
      {
        src: "icons/windows11/SmallTile.scale-200.png",
        sizes: "142x142",
        purpose: "any",
      },
      {
        src: "icons/windows11/SmallTile.scale-400.png",
        sizes: "284x284",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square150x150Logo.scale-125.png",
        sizes: "188x188",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square150x150Logo.scale-150.png",
        sizes: "225x225",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square150x150Logo.scale-200.png",
        sizes: "300x300",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square150x150Logo.scale-400.png",
        sizes: "600x600",
        purpose: "any",
      },
      {
        src: "icons/windows11/Wide310x150Logo.scale-100.png",
        sizes: "310x150",
        purpose: "any",
      },
      {
        src: "icons/windows11/Wide310x150Logo.scale-125.png",
        sizes: "388x188",
        purpose: "any",
      },
      {
        src: "icons/windows11/Wide310x150Logo.scale-150.png",
        sizes: "465x225",
        purpose: "any",
      },
      {
        src: "icons/windows11/Wide310x150Logo.scale-200.png",
        sizes: "620x300",
        purpose: "any",
      },
      {
        src: "icons/windows11/Wide310x150Logo.scale-400.png",
        sizes: "1240x600",
        purpose: "any",
      },
      {
        src: "icons/windows11/LargeTile.scale-100.png",
        sizes: "310x310",
        purpose: "any",
      },
      {
        src: "icons/windows11/LargeTile.scale-125.png",
        sizes: "388x388",
        purpose: "any",
      },
      {
        src: "icons/windows11/LargeTile.scale-150.png",
        sizes: "465x465",
        purpose: "any",
      },
      {
        src: "icons/windows11/LargeTile.scale-200.png",
        sizes: "620x620",
        purpose: "any",
      },
      {
        src: "icons/windows11/LargeTile.scale-400.png",
        sizes: "1240x1240",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.scale-100.png",
        sizes: "44x44",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.scale-125.png",
        sizes: "55x55",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.scale-150.png",
        sizes: "66x66",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.scale-200.png",
        sizes: "88x88",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.scale-400.png",
        sizes: "176x176",
        purpose: "any",
      },
      {
        src: "icons/windows11/StoreLogo.scale-100.png",
        sizes: "50x50",
        purpose: "any",
      },
      {
        src: "icons/windows11/StoreLogo.scale-125.png",
        sizes: "63x63",
        purpose: "any",
      },
      {
        src: "icons/windows11/StoreLogo.scale-150.png",
        sizes: "75x75",
        purpose: "any",
      },
      {
        src: "icons/windows11/StoreLogo.scale-200.png",
        sizes: "100x100",
        purpose: "any",
      },
      {
        src: "icons/windows11/StoreLogo.scale-400.png",
        sizes: "200x200",
        purpose: "any",
      },
      {
        src: "icons/windows11/SplashScreen.scale-100.png",
        sizes: "620x300",
        purpose: "any",
      },
      {
        src: "icons/windows11/SplashScreen.scale-125.png",
        sizes: "775x375",
        purpose: "any",
      },
      {
        src: "icons/windows11/SplashScreen.scale-150.png",
        sizes: "930x450",
        purpose: "any",
      },
      {
        src: "icons/windows11/SplashScreen.scale-200.png",
        sizes: "1240x600",
        purpose: "any",
      },
      {
        src: "icons/windows11/SplashScreen.scale-400.png",
        sizes: "2480x1200",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-20.png",
        sizes: "20x20",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-24.png",
        sizes: "24x24",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-30.png",
        sizes: "30x30",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-36.png",
        sizes: "36x36",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-40.png",
        sizes: "40x40",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-44.png",
        sizes: "44x44",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-48.png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-60.png",
        sizes: "60x60",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-64.png",
        sizes: "64x64",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-80.png",
        sizes: "80x80",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-96.png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.targetsize-256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
        sizes: "20x20",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
        sizes: "24x24",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
        sizes: "30x30",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
        sizes: "36x36",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
        sizes: "40x40",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
        sizes: "44x44",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
        sizes: "60x60",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
        sizes: "64x64",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
        sizes: "80x80",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-512-512.png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-192-192.png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-144-144.png",
        sizes: "144x144",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-96-96.png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-72-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "icons/android/android-launchericon-48-48.png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "icons/ios/16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "icons/ios/20.png",
        sizes: "20x20",
        purpose: "any",
      },
      {
        src: "icons/ios/29.png",
        sizes: "29x29",
        purpose: "any",
      },
      {
        src: "icons/ios/32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "icons/ios/40.png",
        sizes: "40x40",
        purpose: "any",
      },
      {
        src: "icons/ios/50.png",
        sizes: "50x50",
        purpose: "any",
      },
      {
        src: "icons/ios/57.png",
        sizes: "57x57",
        purpose: "any",
      },
      {
        src: "icons/ios/58.png",
        sizes: "58x58",
        purpose: "any",
      },
      {
        src: "icons/ios/60.png",
        sizes: "60x60",
        purpose: "any",
      },
      {
        src: "icons/ios/64.png",
        sizes: "64x64",
        purpose: "any",
      },
      {
        src: "icons/ios/72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "icons/ios/76.png",
        sizes: "76x76",
        purpose: "any",
      },
      {
        src: "icons/ios/80.png",
        sizes: "80x80",
        purpose: "any",
      },
      {
        src: "icons/ios/87.png",
        sizes: "87x87",
        purpose: "any",
      },
      {
        src: "icons/ios/100.png",
        sizes: "100x100",
        purpose: "any",
      },
      {
        src: "icons/ios/114.png",
        sizes: "114x114",
        purpose: "any",
      },
      {
        src: "icons/ios/120.png",
        sizes: "120x120",
        purpose: "any",
      },
      {
        src: "icons/ios/128.png",
        sizes: "128x128",
        purpose: "any",
      },
      {
        src: "icons/ios/144.png",
        sizes: "144x144",
        purpose: "any",
      },
      {
        src: "icons/ios/152.png",
        sizes: "152x152",
        purpose: "any",
      },
      {
        src: "icons/ios/167.png",
        sizes: "167x167",
        purpose: "any",
      },
      {
        src: "icons/ios/180.png",
        sizes: "180x180",
        purpose: "any",
      },
      {
        src: "icons/ios/192.png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "icons/ios/256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "icons/ios/512.png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "icons/ios/1024.png",
        sizes: "1024x1024",
        purpose: "any",
      },
    ],
  };
}
