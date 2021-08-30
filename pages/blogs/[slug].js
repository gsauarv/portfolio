// Importing the router from the next/router to get the slug from the url
// It uses the useRouter hooks to get the current slug.

import { useRouter } from "next/dist/client/router";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import { sanityClient } from "../../lib/sanity";

// Functionall component to get  the sanity api and  display its content.

const BlogDetails = ({ title, description, body, mainImage }) => {
  const router = useRouter();
  // Loading screens so that if there are any fallbacks it will show the loading text to the users and
  // provide the blogdetailscomponet after the running the getStaticProps.
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <BlogDetailsComponent
      blogTitle={title}
      blogDescription={description}
      body={body}
      mainImage={mainImage}
      goToHref="/blogs/"
      goToName="back to blogs"
    />
  );
};

export default BlogDetails;

// getting the serversideprops to ensure the data we are getting is fresh and updated from the
// server.

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const [post] = await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}"]
{
  title,
  description,
  body,
  "mainImage" : mainImage.asset -> url
}
  `
  );

  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const posts = await sanityClient.fetch(`*[_type == "post" ]
  {
      'slug': slug.current
  }`);
  return {
    paths: posts.map(({ slug }) => `/blogs/${slug}`),
    fallback: true,
  };
};
