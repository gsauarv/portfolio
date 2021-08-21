import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
const Landing = () => {
  return (
    <Container maxWidth="container.xl">
      <Flex
        direction="column"
        justify="center"
        minHeight="50%"
        height="container.md"
        backgroundSize="cover"
      >
        <Text fontSize="md" letterSpacing="wide" pt="5" pb="5" color="gray.500">
          Saurav Ghimire
        </Text>
        <Heading
          letterSpacing="wide"
          fontWeight="bold"
          textTransform="capitalize"
          size="xl"
          lineHeight="tall"
        >
          passionate {`< React developer />`} from Kathmandu,NP
          {<br></br>}
          Who loves the blank canvas.
        </Heading>

        <Text fontSize="md" letterSpacing="wide" pt="5" pb="5" color="gray.500">
          Follow me on social media to know me better.
        </Text>
        <Flex gridGap="3" pb="5">
          <SocialLinks
            iconAriaName="Github"
            iconName={<AiFillGithub />}
            linkButton="https://github.com/gsauarv"
          />

          <SocialLinks
            iconAriaName="youtube"
            iconName={<AiFillYoutube />}
            linkButton="https://www.youtube.com/channel/UClTCDuid2XiJukenc1NRSpQ"
          />
          <SocialLinks
            iconAriaName="instagram"
            iconName={<AiFillInstagram />}
            linkButton="https://instagram.com/gh_saurav"
          />
        </Flex>
        <Flex pt="5" gridGap="3">
          <Button
            size="lg"
            fontSize="sm"
            _focus={{ outline: 0 }}
            letterSpacing="wider"
            colorScheme="green"
            // rightIcon={<AiOutlineNodeExpand fontSize="24" fontWeight="bold" />}
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            fontSize="sm"
            _focus={{ outline: 0 }}
            letterSpacing="wider"
            variant="outline"
            // rightIcon={
            //   <AiOutlineCloudDownload fontSize="24" fontWeight="bold" />
            // }
          >
            Download My CV
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Landing;
