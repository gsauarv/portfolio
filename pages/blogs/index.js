import Client from "../../Client";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";

const Blogs = ({ posts }) => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Container
        maxWidth={{
          base: "container.sm",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <Text fontSize="lg" fontWeight="medium" my="20" letterSpacing="wide">
          Read my thoughts.
        </Text>
        {posts.map((post) => (
          <Link href={`blogs/${post.slug}`} key={post._id}>
            <a>
              <motion.div variants={fadeInUp}>
                <BlogsCards
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
      </Container>
    </motion.div>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const posts = await Client.fetch(`*[_type == 'post']  | order(_createdAt desc)
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
