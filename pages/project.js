import { Container, Flex, Text } from "@chakra-ui/react";
import ProjectCard from "../Components/projectCards";

const projects = [
  {
    projectName: "TodoList",
    projectDescription: "",
    imageUrl:
      "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b10.jpg?compress=1&resize=400x300",
    languageUsed: "Javascript and React",
    id: 1,
  },

  {
    projectName: "Hello world",
    projectDescription: "Hello world this is the descriptioin",

    languageUsed: "Javascript and React",
    id: 2,
  },

  {
    projectName: "Hello world",
    projectDescription: "Hello world this is the descriptioin",

    languageUsed: "Javascript and React",
    id: 3,
  },

  {
    projectName: "Hello world",
    projectDescription: "Hello world this is the descriptioin",

    languageUsed: "Javascript and React",
    id: 4,
  },
  {
    projectName: "Hello world",
    projectDescription: "Hello world this is the descriptioin",

    languageUsed: "Javascript and React",
    id: 5,
  },
  {
    projectName: "Hello world",
    projectDescription: "Hello world this is the descriptioin",

    languageUsed: "Javascript and React",
    id: 6,
  },
];
const project = () => {
  return (
    <Container maxW="container.xl" mt="20">
      <Text fontSize="x-large" fontWeight="bold" mb="20">
        Things I &apos; ve Been Working On.
      </Text>
      <Flex direction="row" flexWrap="wrap" gridGap="40">
        {projects.map((project) => (
          <ProjectCard
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            languageUsed={project.languageUsed}
            key={project.id}
            padding={project.id % 2 == 0 ? 50 : 0}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default project;
