import Landing from "../Components/Landing";
import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/color-mode";
import PageHeading from "../Components/PageHeading";
import { Box, Container, Text } from "@chakra-ui/react";
import SkillsComponents from "../Components/SkillsComponents";
import Card from "../Components/Card";
import ContainerComponents from "../Components/ContainerComponents";
import BlogCards from "../Components/BlogCards";
import Link from "next/link";

// Home function exported as default
export default function Home({ results }) {
  // colo mode hooks and color mode value
  const bg = useColorModeValue("#f3f3f3", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <>
      {/* header implemented for seo */}
      <Head>
        <title>Saurav Ghimire - Front End Developer & Student</title>
        <meta
          name="description"
          content="I'm a developer and a student of technology. I work at Darshan Solutions as a full stack developer and also a part of core management
                team. Having fun while bulding is my passion. I also a great
                learner and reader who love to learn new things."
        />
        <meta property="og:title" content="Saurav Ghimire" />
        <meta
          property="og:description"
          content="I'm a developer and a student of technology. I work at Darshan Solutions as a full stack developer and also a part of core management
                team. Having fun while bulding is my passion. I also a great
                learner and reader who love to learn new things."
        />
        <meta property="og:url" content="https://gsaurav.com.np" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="./logo1.svg" />
      </Head>

      {/* landing page as a  whole component*/}
      <Landing />
      <ContainerComponents>
        {/* Skills Components */}
        <SkillsComponents />

        {/* current Project cards */}
        <Box mt={"14"} mb={"40"}>
          <Box>
            {/* page heading */}
            <PageHeading
              headingText={"Current Project"}
              fontWeightSize={"bold"}
              headingSize={"xl"}
              styles={{
                color: textColor,
              }}
            ></PageHeading>

            {/* Project Card */}
            <Card />
            <Card />
          </Box>

          {/* Recent Blogs */}
          <Box>
            <PageHeading
              headingText={"Recent Blogs"}
              fontWeightSize={"bold"}
              headingSize={"xl"}
              styles={{
                color: textColor,
              }}
            />

            {/* blog cards */}
            <BlogCards />
            <BlogCards />

            <Box mt={"5"}>
              <Link href="/blogs">
                <Text
                  maxW={"fit-content"}
                  color={"purple.500"}
                  fontSize={{ base: "sm", md: "md" }}
                  p={"4"}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Read more blogs
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      </ContainerComponents>
    </>
  );
}
