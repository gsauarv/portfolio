import { Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import Link from "next/link";
import Head from "next/head";
import ContainerComponents from "../../Components/ContainerComponents";
import Card from "../../Components/Card";
import { fetchBlogs, fetchProject } from "../../util/contentfulPosts";

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
            {projects.map((project) => (
              <div key={project.id}>
                <Card
                  projectName={project.projectTitle}
                  key={project.id}
                  projectDescription={project.description}
                  projectLink={project.slug}
                  projectImage={project.heroImage}
                />
              </div>
            ))}
          </Grid>
        </ContainerComponents>
      </motion.div>
    </>
  );
};

export default project;

export async function getStaticProps() {
  const entries = await fetchProject();
  const content = entries.map((entry) => entry.fields);
  console.log(content);

  return {
    props: {
      projects: content,
    },
    revalidate: 10,
  };
}
