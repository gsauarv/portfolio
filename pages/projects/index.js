import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import Head from "next/head";
import ContainerComponents from "../../Components/ContainerComponents";
import Cards from "../../Components/Card";
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
            Things I&apos;ve Been Working On.
          </Text>
          <Flex direction="column">
            <motion.div variants={fadeInUp}>
              {projects.map((project) => (
                <Link href={`projects/${project.slug}`} key={project.projectId}>
                  <a>
                    <Cards
                      blogTitle={project.projectName}
                      blogDescription={project.projectDesc}
                      key={project.projectId}
                      slug={project.slug}
                      imageSrc={project.mainImage}
                      publishedAt={project.publishedAt}
                    />
                  </a>
                </Link>
              ))}
            </motion.div>
          </Flex>
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
