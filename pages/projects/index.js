import { Container, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import Head from "next/head";
const project = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Read all my projects</title>
        <meta
          name="description"
          content="In this page you can look at some of my handpicken projects."
        ></meta>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <motion.div initial="initial" animate="animate" variant={stagger}>
        <Container
          maxWidth={{
            base: "container.sm",
            md: "container.lg",
            xl: "1200",
          }}
          mt="20"
        >
          <Text fontSize="lg" fontWeight="medium" my="20" letterSpacing="wide">
            Things I&apos;ve Been Working On.
          </Text>
          <Flex direction="column">
            <motion.div variants={fadeInUp}>
              {projects.map((project) => (
                <Link href={`projects/${project.slug}`} key={project.projectId}>
                  <a>
                    <BlogsCards
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
        </Container>
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
