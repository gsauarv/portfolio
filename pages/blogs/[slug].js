// Importing the router from the next/router to get the slug from the url
// It uses the useRouter hooks to get the current slug.

import { Container } from "@chakra-ui/layout";
import Client from "../../Client";

// Functionall component to get  the sanity api and  display its content.

const BlogDetails = ({ title }) => {
  return <Container>{title}</Container>;
};

export default BlogDetails;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const [post] = await Client.fetch(
    `*[_type == "post" && slug.current == "${slug}"]
{
  title,
  "slug" : slug.current
}
  `
  );

  return { props: { ...post }};
};

export const getStaticPaths = async () => {
  const posts = await Client.fetch(`*[_type == "post" ]
  {
      'slug': slug.current
  }`);
  return {
    paths: posts.map(({ slug }) => `/blogs/${slug}`),
    fallback: false,
  };
};
