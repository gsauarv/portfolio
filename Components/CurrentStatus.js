import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container } from "@chakra-ui/layout";
import CurrentProjectCard from "./CurrentProjectCard";
import PageHeading from "./PageHeading";

const CurrentStatus = () => {
  const bg = useColorModeValue("#f3f3f3", "gray.700");

  return (
    <Box bg={bg}>
      <Container
        maxWidth={{
          base: "100%",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <PageHeading
          headingText="Ongoing Projects."
          headingSize="xx-large"
          fontWeightSize="bold"
          styles={{
            paddingTop: "50px",
          }}
        />

        <CurrentProjectCard />
      </Container>
    </Box>
  );
};

export default CurrentStatus;
