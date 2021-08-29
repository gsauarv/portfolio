import { Container, Box } from "@chakra-ui/layout";
import Vplayer from "../../Components/Vplayer";
import sanityClient from "../../Client";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";
import { Flex } from "@chakra-ui/react";

const ProjectDetails = ({
  projectName,
  projectDesc,
  publishedAt,
  videoUrl,
  body,
}) => {
  return (
    <Container maxW={{ base: "100%", md: "100%", xl: "70%" }}>
      <BlogDetailsComponent
        blogTitle={projectName}
        blogDescription={projectDesc}
        body={body}
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

export const getServerSideProps = async ({ params }) => {
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
