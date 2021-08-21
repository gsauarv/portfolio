import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
const ProjectCard = ({
  projectName,
  projectDescription,
  languageUsed,
  imageSrc,
}) => {
  return (
    <Flex direction="column" width="lg" overflow="hidden">
      <Box borderRadius="lg" width="xl" height="md" background="salmon">
        <Image
          src={imageSrc}
          width="1080"
          height="850"
          quality="80"
          layout="responsive"
          overflow="hidden"
        ></Image>
      </Box>
      <Flex direction="column" pt="5">
        <Heading>{projectName}</Heading>
        <Text pt="3">{projectDescription}</Text>
        <Text pt="3">{languageUsed}</Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
