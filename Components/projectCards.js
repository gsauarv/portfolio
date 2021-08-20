import { Box, Flex, Square, Text, img, Heading } from "@chakra-ui/react";
import Image from "next/image";
const ProjectCard = ({
  projectName,
  projectDescription,
  languageUsed,
  imageSrc,
  padding,
}) => {
  return (
    <Flex direction="column" width="lg" mt={padding} overflow="hidden">
      <Box
        borderRadius="lg"
        width="xl"
        height="md"
        overflow="hidden"
        background="salmon"
      >
        <Image src={imageSrc} width="1080" height="850" quality="100"></Image>
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
