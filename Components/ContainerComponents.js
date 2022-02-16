import { Container } from "@chakra-ui/react";

function ContainerComponents({ children }) {
  return (
    <Container
      maxWidth={{
        base: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
    >
      {children}
    </Container>
  );
}

export default ContainerComponents;
