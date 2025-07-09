import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script"; // ✅ import this

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        url: "/Reazul.png",
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
    icon: "/favicon1.png",
  },
  metadataBase: new URL("https://reazul-alavhi.vercel.app"),
  other: {
    "google-site-verification": "P_CyrF1y1pMLhHK7fzOiYiZoH3eW7D2kaCiHMswFdAw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>

      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LCW9VWYYEV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LCW9VWYYEV');
        `}
      </Script>

      <body className="bg-white text-neutral-900 antialiased dark:bg-zinc-900 dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
