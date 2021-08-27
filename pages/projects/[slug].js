import { Container } from "@chakra-ui/layout";
import Vplayer from "../../Components/Vplayer";
const ProjectDetails = () => {
  return (
    <div>
      <Container>
        <h1>Helllo</h1>
        <Vplayer videoUrl="https://www.youtube.com/watch?v=gnZImHvA0ME" />
      </Container>
    </div>
  );
};

export default ProjectDetails;
