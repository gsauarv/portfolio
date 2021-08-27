import Client from "../../Client";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";

const Blogs = ({ posts }) => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Container maxW="container.xl">
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
