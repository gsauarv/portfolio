import Client from "../../Client";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { Container } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
const Blogs = ({ posts }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={stagger}>
        <Container maxW="container.xl">
          {posts.map((post) => (
            <Link href={`blogs/${post.slug}`}>
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
