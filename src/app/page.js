import Head from "next/head";
import Banner from "../../sections/Banner";
import Skills from "../../sections/skills";
import Contact from "../../sections/Contact"

export default function HomePage() {


  return (
    <>
      <Head>
        <title>Reazul Alavhi | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Reazul Alavhi, a full-stack developer building modern web apps with Next.js, React, and Node.js. Explore my work and connect with me!"
        />
        <meta property="og:title" content="Reazul Alavhi | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Reazul Alavhi — a passionate developer crafting high-performance web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/reazul.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="keywords" content="Reazul Alavhi, Full Stack Developer, Next.js Developer, React Developer, Web Developer Bangladesh" />
        {/* <meta name="google-site-verification" content="YNA0IzE2JZWp3j3OGzceqiJYNKhy22PGPNIIclXnDmU" /> */}
        <meta name="google-site-verification" content="P_CyrF1y1pMLhHK7fzOiYiZoH3eW7D2kaCiHMswFdAw" />
        <meta name="author" content="Reazul Alavhi" />
      </Head>
      <main>

        <Banner />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
