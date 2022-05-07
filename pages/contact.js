import ContactCard from "../Components/ContactCard";
import Head from "next/head";
import ContainerComponents from "../Components/ContainerComponents";

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
      <ContainerComponents
        maxWidth={{
          base: "container.sm",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <ContactCard />
      </ContainerComponents>
    </>
  );
};

export default Contact;
