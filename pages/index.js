import Landing from "../Components/Landing";
import Head from "next/head";
import CurrentStatus from "../Components/CurrentStatus";
export default function Home() {
  return (
    <>
      <Head>
        <title>🏠Homepage | Sauru Welcome You</title>
        <meta
          name="description"
          content="Hi, Saurav Ghimire welcome you to his porfolio,in here he post his  blogs,projects,and anything he feels right 😁"
        />
        <meta property="og:title" content="Saurav Ghimire" />
        <meta property="og:description" content="Welcome to my portfolio 👩‍💻" />
        <meta
          property="og:url"
          content="https://portfolio-jet-gamma.vercel.app/"
        />

        <meta property="og:type" content="website" />

        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <Landing />

      {/* Current Status goes here!!! */}

      <CurrentStatus />
    </>
  );
}
