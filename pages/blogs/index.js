import { Container, Flex } from "@chakra-ui/react";
import BlogsCards from "../../Components/BlogsCard";
import Link from "next/link";
import Client from "../../Client";
const Blogs = ({ posts }) => {
  return (
    <Container maxW="container.xl">
      {posts.map((post) => (
        <Link href={`blogs/${post.slug}`} key={post._id}>
          <a>
            <BlogsCards
              blogTitle={post.title}
              publishedAt={post.publishedAt}
              blogDescription={post.description}
              imageSrc={post.imageSrc}
            />
          </a>
        </Link>
      ))}
    </Container>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const posts = await Client.fetch(`*[_type == 'post']
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
    props: { posts, unstable_revalidate: 1 },
  };
};
