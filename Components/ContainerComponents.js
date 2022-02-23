import { Container } from "@chakra-ui/react";

function ContainerComponents({ children }) {
  return (
    <Container
      maxWidth={{
        base: "100%",
        md: "container.md",
        lg: "1000px",
      }}
    >
      {children}
    </Container>
  );
}

export default ContainerComponents;
