import { Box } from "@chakra-ui/layout";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import Head from "next/head";

const ProjectDetails = ({ projectName, projectDesc, videoUrl, body }) => {
  return (
    <>
      <Head>
        <title>{projectName}</title>
        <meta name="description" content={projectDesc}></meta>
        <link rel="icon" href="./logo.svg" />
      </Head>
      <BlogDetailsComponent
        blogTitle={projectName}
        blogDescription={projectDesc}
        body={body}
        goToHref="/projects/"
        goToName="back to projects"
      />
    </>
  );
};

export default ProjectDetails;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const [projectDetails] = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${slug}" ]
    {
      projectName,
      projectDesc,
      publishedAt,
      videoUrl,
      body
    }`
  );

  return {
    props: {
      ...projectDetails,
    },
  };
};

export const getStaticPaths = async () => {
  const projects = await sanityClient.fetch(`*[_type == "projects" ]
  {
      'slug': slug.current
  }`);
  return {
    paths: projects.map(({ slug }) => `/blogs/${slug}`),
    fallback: true,
  };
};
