import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spline Motion — High-Impact Motion Design for SaaS, AI & Tech",
  description:
    "A two-person motion design agency founded by Barun Mazumder & Hriday Das. We build the visual narratives and product launch videos that accelerate SaaS, AI, and B2B growth.",
  keywords: [
    "motion design agency",
    "SaaS product videos",
    "product launch videos",
    "UI UX animation",
    "developer tools motion",
    "Spline Motion",
    "Barun Mazumder",
    "Hriday Das"
  ],
  authors: [{ name: "Barun Mazumder" }, { name: "Hriday Das" }],
  openGraph: {
    title: "Spline Motion — High-Impact Motion Design for SaaS, AI & Tech",
    description:
      "A specialized creative motion partner for technology companies. Strategy + Storytelling + Design + Motion.",
    url: "https://splinemotion.com",
    siteName: "Spline Motion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <body className="bg-[#050505] text-[#f4f4f5] antialiased selection:bg-[#ff5500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
