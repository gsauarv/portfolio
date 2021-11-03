import { Container, Box } from "@chakra-ui/layout";
import Vplayer from "../../Components/Vplayer";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import { Flex } from "@chakra-ui/react";
import { sanityClient } from "../../lib/sanity";
import Head from "next/head";

const ProjectDetails = ({ projectName, projectDesc, videoUrl, body }) => {
  return (
    <>
      <Head>
        <title>{projectName}</title>
        <meta name="description" content={projectDesc}></meta>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <Container maxW={{ base: "100%", md: "100%", xl: "80%" }}>
        <BlogDetailsComponent
          blogTitle={projectName}
          blogDescription={projectDesc}
          body={body}
          goToHref="/projects/"
          goToName="back to projects"
        />

        {!videoUrl > 2 ? (
          <></>
        ) : (
          <Box
            m="auto"
            maxW={{ base: "100%", md: "100%", xl: "80%" }}
            h="450px"
          >
            <Vplayer videoUrl={videoUrl} />
          </Box>
        )}
        {/* <Flex
          justify="center"
          direction="row"
          alignItems="center"
          alignSelf="center"
          overflow="hidden"
          mb="10"
        ></Flex> */}
      </Container>
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
