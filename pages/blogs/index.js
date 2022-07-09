import Link from "next/link";
import { Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import Head from "next/head";
import ContainerComponents from "../../Components/ContainerComponents";
import Cards from "../../Components/Card";
import BlogCards from "../../Components/BlogCards";
import { fetchBlogs } from "../../util/contentfulPosts";
const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Read my blogs</title>
        <meta
          name="description"
          content="In this page you can read my thoughts through the blog I've written."
        ></meta>
        <meta property="og:title" content="Saurav's Blogs"></meta>
        <link rel="icon" href="./logo1.svg" />
      </Head>
      <motion.div initial="initial" animate="animate" variants={stagger}>
        <ContainerComponents
          maxWidth={{
            base: "container.sm",
            md: "container.lg",
            xl: "1200",
          }}
        >
          <Text fontSize="lg" fontWeight="medium" mt="10" letterSpacing="wide">
            Read my thoughts.
          </Text>
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,2fr)" }}
            gap={10}
          >
            {/* blogs */}
            {blogs.map((blog) => (
              <div key={blog.id}>
                <Cards
                  projectName={blog.blogTitle}
                  projectImage={blog.heroImage}
                  projectDescription={blog.description}
                />
              </div>
            ))}
          </Grid>
        </ContainerComponents>
      </motion.div>
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const entries = await fetchBlogs();
  const content = entries.map((entry) => entry.fields);
  console.log(content);

  return {
    props: {
      blogs: content,
    },
    revalidate: 10,
  };
};
