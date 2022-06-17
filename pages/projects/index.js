import { Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import Head from "next/head";
import ContainerComponents from "../../Components/ContainerComponents";
import Card from "../../Components/Card";

const project = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Read all my projects</title>
        <meta
          name="description"
          content="In this page you can look at some of my handpicken projects."
        ></meta>
        <link rel="icon" href="./logo1.svg" />
      </Head>
      <motion.div initial="initial" animate="animate" variant={stagger}>
        <ContainerComponents>
          <Text
            fontSize="lg"
            fontWeight="medium"
            mt={"10"}
            letterSpacing="wide"
          >
            Featured Projects
          </Text>
          {/* projects */}
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,2fr)" }}
            gap={10}
          >
            <Card
              projectImage={"./project.png"}
              projectName={"Urbar Nepal"}
              projectDescription={"This is the description of the project"}
            />

            <Card
              projectImage={"./project.png"}
              projectName={"Urbar Nepal"}
              projectDescription={"This is the description of the project"}
            />

            <Card
              projectImage={"./project.png"}
              projectName={"Urbar Nepal"}
              projectDescription={"This is the description of the project"}
            />
          </Grid>
        </ContainerComponents>
      </motion.div>
    </>
  );
};

export default project;

export const getStaticProps = async () => {
  const projects =
    await sanityClient.fetch(`*[_type == "project"] |order(publishedAt desc)
  {
    "projectId":_id,
    projectName,
    projectDesc,
    publishedAt,
    "mainImage" : "",
    "slug" : slug.current,
    
  }`);

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};
