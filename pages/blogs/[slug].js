// Importing the router from the next/router to get the slug from the url
// It uses the useRouter hooks to get the current slug.

import Client from "../../Client";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";

// Functionall component to get  the sanity api and  display its content.

const BlogDetails = ({ title, description, body, mainImage }) => {
  return (
    <BlogDetailsComponent
      blogTitle={title}
      blogDescription={description}
      body={body}
      mainImage={mainImage}
    />
  );
};

export default BlogDetails;

// getting the serversideprops to ensure the data we are getting is fresh and updated from the
// server.

export const getServerSideProps = async ({ params }) => {
  const slug = params.slug;
  const [post] = await Client.fetch(
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

// export const getStaticPaths = async () => {
//   const posts = await Client.fetch(`*[_type == "post" ]
//   {
//       'slug': slug.current
//   }`);
//   return {
//     paths: posts.map(({ slug }) => `/blogs/${slug}`),
//     fallback: false,
//   };
// };
