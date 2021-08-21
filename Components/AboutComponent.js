import { Container } from "@chakra-ui/layout";
import {
  Box,
  Flex,
  Heading,
  Text,
  Img,
  Button,
  Square,
} from "@chakra-ui/react";
import Link from "next/link";

import Image from "next/image";
const AboutComponent = () => {
  return (
    <Container maxW="container.xl" overflow="auto">
      <Box w="80%" pt="100">
        <Heading fontSize="xx-large" letterSpacing="wide">
          Hi, I'm Saurav Ghimire
        </Heading>
        <Text
          pt="5"
          fontSize="lg"
          color="gray.600"
          width={{ base: "sm", md: "md", lg: "md" }}
        >
          Currently pursuing a Bachelor in Computer Science at Infrastructure
          University.
        </Text>
      </Box>
      <Flex mt="100" direction="row" flexWrap="wrap">
        <Square
          background="gray.800"
          overflow="hidden"
          size={{ base: "sm", md: "md", lg: "md" }}
          pt="50"
          mb="100"
          borderRadius="lg"
        >
          <Image
            alt="my image"
            width="450"
            height="800"
            pt="10"
            src="https://lh3.googleusercontent.com/pw/AM-JKLVWoCBtjcmbSit-DSnITNH2fJp_WJ_lQQqX7cwPsBLXKIY41ZKYT87Yn566wtRBfszam2jlEPTXctamDtosmXPKbYzcC2SiJDiMl0K-yII7tFG6OF5MlACHmWiISUipbPkLN2FZdCrZS8wHe_ZB4debWQ=w535-h951-no?authuser=0"
          ></Image>
        </Square>

        <Flex
          direction="column"
          gridGap="5"
          width={{ base: "100%", md: "100%", lg: "40%" }}
          pt={{ xl: 0, sm: 10, md: 10 }}
          ml={{ base: "0", md: "0", lg: "15%" }}
        >
          <Text textAlign="justify" fontSize="md">
            My education and work experiences have taught me the need for
            constant learning and evolving in the career of a designer. I
            believe that there is no formula to a good user experience and every
            project provides an opportunity for discovery.
          </Text>

          <Text textAlign="justify" fontSize="md">
            With a passion for user-centered design, a problem solving approach,
            and a strong growth mindset, my intent is to test the boundaries of
            user interactions and create innovative product experiences.
          </Text>
          <Link href="https://drive.google.com/file/d/12yT-Gfko3H5Fbz3Q3-1ezOmRSYnpp8QL/view?usp=sharing">
            <a target="_blank" width="xs">
              {" "}
              <Button
                variant="solid"
                colorScheme="green"
                width="xm"
                mt="5"
                mb="10"
              >
                View My Resume
              </Button>
            </a>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AboutComponent;
