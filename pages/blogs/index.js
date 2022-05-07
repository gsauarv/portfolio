import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import { sanityClient } from "../../lib/sanity";
import Head from "next/head";
import ContainerComponents from "../../Components/ContainerComponents";
import Cards from "../../Components/Card";
const Blogs = ({ posts }) => {
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
          {posts.map((post) => (
            <Link href={`blogs/${post.slug}`} key={post._id}>
              <a>
                <motion.div variants={fadeInUp}>
                  <Cards
                    blogTitle={post.title}
                    publishedAt={post.publishedAt}
                    blogDescription={post.description}
                    imageSrc={post.imageSrc}
                    slug={post.slug}
                  />
                </motion.div>
              </a>
            </Link>
          ))}
        </ContainerComponents>
      </motion.div>
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const posts =
    await sanityClient.fetch(`*[_type == 'post']  | order(_createdAt desc)
  {
      _id,
      mainImage,
      publishedAt,
      description,
      "slug" : slug.current,
      title,
      "imageSrc" : mainImage.asset -> url

  }`);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
