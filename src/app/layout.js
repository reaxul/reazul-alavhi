import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reazul Alavhi | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Reazul Alavhi — a passionate full-stack developer with expertise in Next.js, React, and modern web technologies.",
  keywords: [
    "Reazul Alavhi",
    "Portfolio",
    "Full-Stack Developer in Bangladesh",
    "Next.js",
    "React",
    "Frontend",
    "Backend",
    "Most intelligent man in Bangladesh",
  ],
  authors: [{ name: "Reazul Alavhi" }],
  creator: "Reazul Alavhi",
  openGraph: {
    title: "Reazul Alavhi | Portfolio",
    description:
      "Discover the work and skills of Reazul Alavhi, a full-stack web developer specializing in modern, fast, and responsive web apps.",
    siteName: "Reazul Alavhi Portfolio",
    images: [
      {
        url: "/Reazul.png", // Just use relative path inside `public/`
        width: 1200,
        height: 630,
        alt: "Reazul Alavhi Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reazul Alavhi | Portfolio",
    description:
      "Modern portfolio of Reazul Alavhi, full-stack developer and creative technologist.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo (2).jpeg",
  },
  metadataBase: new URL("https://your-portfolio-domain.com"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-white text-neutral-900 antialiased dark:bg-zinc-900 dark:text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
