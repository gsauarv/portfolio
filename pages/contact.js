import { Container } from "@chakra-ui/react";
import ContactCard from "../Components/ContactCard";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | 📧</title>
        <meta
          name="description"
          content="Contact Saurav Ghimire using email address:gsaurav2000@gmail.com"
        ></meta>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
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
