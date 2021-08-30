import { Container, Box } from "@chakra-ui/layout";
import Vplayer from "../../Components/Vplayer";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import { Flex } from "@chakra-ui/react";
import { sanityClient } from "../../lib/sanity";

const ProjectDetails = ({ projectName, projectDesc, videoUrl, body }) => {
  return (
    <Container maxW={{ base: "100%", md: "100%", xl: "70%" }}>
      <BlogDetailsComponent
        blogTitle={projectName}
        blogDescription={projectDesc}
        body={body}
        goToHref="/projects/"
        goToName="back to projects"
      />
      <Flex
        justify="center"
        direction="row"
        alignItems="center"
        alignSelf="center"
        overflow="hidden"
        mb="10"
      >
        {!videoUrl > 2 ? (
          <></>
        ) : (
          <Box w="100%" h="450px">
            <Vplayer videoUrl="https://www.youtube.com/watch?v=2oZTSlpOEeQ" />
          </Box>
        )}
      </Flex>
    </Container>
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
