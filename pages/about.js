// Container from chakra ui
import { Container } from "@chakra-ui/layout";
import Head from "next/head";
// Importing the about components.
import AboutComponent from "../Components/AboutComponent";

const About = () => {
  return (
    <>
      <Head>
        <title>About Saurav</title>
        <meta
          name="description"
          content="Saurav Ghimire is a passionate and hardwoking student of technology currently working on getting better."
        ></meta>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <AboutComponent />
    </>
  );
};

export default About;
