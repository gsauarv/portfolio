import { Flex, Container } from "@chakra-ui/react";
import ContactCard from "../Components/ContactCard";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | 📧</title>
        <meta
          name="description"
          content="Contact Saurav Ghimire through emails and social links."
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
