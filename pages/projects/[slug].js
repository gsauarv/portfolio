import { Container } from "@chakra-ui/layout";
import Vplayer from "../../Components/Vplayer";
import sanityClient from "../../Client";
import BlogDetailsComponent from "../../Components/BlogDetailsComponent";

const ProjectDetails = ({
  projectName,
  projectDesc,
  publishedAt,
  videoUrl,
  body,
}) => {
  return (
    <div>
      <Container maxW={{ base: "100%", md: "100%", xl: "container.xl" }}>
        <BlogDetailsComponent
          blogTitle={projectName}
          blogDescription={projectDesc}
          body={body}
        />
      </Container>
    </div>
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
