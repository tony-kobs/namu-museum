import { IBM_Plex_Sans, Montserrat, Roboto } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-family",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const montserrat = Montserrat({
  variable: "--second-family",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const roboto = Roboto({
  variable: "--third-family",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const fontVariables = [
  ibmPlexSans.variable,
  montserrat.variable,
  roboto.variable,
].join(" ");
