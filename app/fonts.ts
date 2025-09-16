import { Inter, Poppins, Dancing_Script, Roboto } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["600", "700"],
});

export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing-script",
});

export const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["400"],
});
