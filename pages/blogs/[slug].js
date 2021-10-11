// Importing the router from the next/router to get the slug from the url
// It uses the useRouter hooks to get the current slug.

import { useRouter } from "next/dist/client/router";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import { sanityClient } from "../../lib/sanity";

// Functionall component to get  the sanity api and  display its content.

// managing the seo using the head component provided by the next/head
import Head from "next/head";

const BlogDetails = ({ title, description, body, mainImage }) => {
  const router = useRouter();
  // Loading screens so that if there are any fallbacks it will show the loading text to the users and
  // provide the blogdetailscomponet after the running the getStaticProps.
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={title}></meta>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <BlogDetailsComponent
        blogTitle={title}
        blogDescription={description}
        body={body}
        mainImage={mainImage}
        goToHref="/blogs/"
        goToName="back to blogs"
      />
    </>
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
