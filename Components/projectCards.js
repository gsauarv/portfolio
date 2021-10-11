import { Box, Flex, Text, Heading } from "@chakra-ui/react";
const ProjectCard = ({ projectName, projectDescription, languageUsed }) => {
  return (
    <Flex direction="column" width="lg" overflow="hidden">
      <Box borderRadius="lg" width="xl" height="md" background="salmon"></Box>
      <Flex direction="column" pt="5">
        <Heading>{projectName}</Heading>
        <Text pt="3">{projectDescription}</Text>
        <Text pt="3">{languageUsed}</Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
