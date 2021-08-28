import { Flex, Container } from "@chakra-ui/react";
import ContactCard from "../Components/ContactCard";

const Contact = () => {
  return (
    <Container
      maxWidth={{
        base: "container.sm",
        md: "container.lg",
        xl: "1200",
      }}
    >
      <ContactCard />
    </Container>
  );
};

export default Contact;
