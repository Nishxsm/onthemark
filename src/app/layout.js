import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/anton";
import CookieBanner from "../components/common/CookieBanner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "OnTheMark",
    description: "OnTheMark — Strategy, design and technology.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body>
                {children}
                <CookieBanner />
            </body>
        </html>
    );
}