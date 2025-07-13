import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jahirul Islam - Software Engineer",
  description:
    "Portfolio of Jahirul Islam, a passionate software engineer specializing in modern App and Web technologies, React, React Native, Next.js, and innovative digital solutions.",
  keywords:
    "jahirul Islam, Software Engineer, React, Next.js, App Development, Portfolio",
  authors: [{ name: "Jahirul Islam" }],
  metadataBase: new URL("https://jahirul.islam.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jahirul Islam - Resume of a Passionate Engineer",
    description:
      "Mobile Application Expert Android & IOS | Custom Web & ERP Solutions Developer",
    type: "website",
    url: "https://jahirul.islam.vercel.app/",
    siteName: "Jahirul Islam - Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahirul Islam - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahirul Islam - Resume of a Passionate Engineer",
    description:
      "Mobile Application Expert Android & IOS | Custom Web & ERP Solutions Developer",
    images: ["/opengraph-image.jpg"],
  },
  other: {
    "google-site-verification": "sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
