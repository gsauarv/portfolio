import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineCloudDownload,
  AiOutlineNodeExpand,
} from "react-icons/ai";
import Image from "next/image";
import icon from "../public/icon.svg";
import { route } from "next/dist/server/router";
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
          <Tooltip
            hasArrow
            label="visit github"
            fontSize="xs"
            closeDelay={0.05}
          >
            <IconButton
              aria-label="Github Icon"
              icon={<AiFillGithub size="20" />}
              _focus={{ outline: 0 }}
            />
          </Tooltip>

          <Tooltip
            hasArrow
            label="visit youtube"
            fontSize="xs"
            closeDelay={0.05}
          >
            <IconButton
              aria-label="Twitter icon"
              icon={<AiFillYoutube size="20" />}
              _focus={{ outline: 0 }}
            />
          </Tooltip>

          <Tooltip
            hasArrow
            label="visit instagram"
            fontSize="xs"
            closeDelay={0.05}
          >
            <IconButton
              aria-label="Instagram Icon"
              icon={<AiFillInstagram size="20" />}
              _focus={{ outline: 0 }}
            />
          </Tooltip>
        </Flex>
        <Flex pt="5" gridGap="3">
          <Button
            size="lg"
            fontSize="sm"
            _focus={{ outline: 0 }}
            letterSpacing="wider"
            colorScheme="green"
            rightIcon={<AiOutlineNodeExpand fontSize="24" fontWeight="bold" />}
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            fontSize="sm"
            _focus={{ outline: 0 }}
            letterSpacing="wider"
            variant="outline"
            rightIcon={
              <AiOutlineCloudDownload fontSize="24" fontWeight="bold" />
            }
          >
            Download My CV
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Landing;
