import { Box, Flex, Link } from "@chakra-ui/layout";
import PageHeading from "./PageHeading";
import SocialLinks from "./SocialLink";
import { AiFillGithub } from "react-icons/ai";

const CurrentProjectCard = () => {
  return (
    <>
      <Flex
        direction={{ lg: "row", md: "column", sm: "column" }}
        align={{ lg: "center", md: "flex-start", sm: "flex-start" }}
        gridGap={{ lg: "40", md: "40", sm: "10" }}
        paddingTop="5rem"
        paddingBottom="5rem"
      >
        <Box maxW={{ lg: "60%", md: "100%", sm: "100%" }}>
          <PageHeading
            headingText="HungerZone - a web app to order food."
            headingSize="xl"
            fontWeightSize="bold"
            styles={{
              paddingBottom: "10px",
            }}
          />
          <PageHeading
            headingText="The concept of this project is to help the resturent to take order from their customers through smartphone or laptops."
            headingSize="md"
            fontWeightSize="normal"
          />
          <Link href="https://nextjs.org" target="_blank" colorScheme="green">
            NextJs
          </Link>
        </Box>
        <div>
          <PageHeading
            headingText="Follow the process."
            headingSize="lg"
            styles={{ paddingBottom: "10px" }}
          />

          <SocialLinks
            iconAriaName="github"
            iconName={<AiFillGithub />}
            linkButton="https://github.com/gsauarv"
            iconSize="lg"
          />
        </div>
      </Flex>
    </>
  );
};

export default CurrentProjectCard;
