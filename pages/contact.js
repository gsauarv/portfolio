import { Container } from "@chakra-ui/react";
import ContactCard from "../Components/ContactCard";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Saurav Ghimire</title>
        <meta
          name="description"
          content="Contact Saurav Ghimire using email address:gsaurav2000@gmail.com"
        ></meta>
        <link rel="icon" href="./logo1.svg" />
      </Head>
      <Container
        maxWidth={{
          base: "container.sm",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <ContactCard />
      </Container>
    </>
  );
};

export default Contact;
