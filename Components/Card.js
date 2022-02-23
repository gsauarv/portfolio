import { Box, SlideFade, keyframes, Text } from "@chakra-ui/react";
import React from "react";

function Card({ projectTitle, projectDesc }) {
  return (
    <Box
      shadow="base"
      bg="gray.700"
      m="2"
      p={"5"}
      mt={"10"}
      mb={"5"}
      rounded="md"
      _hover={{
        shadow: "2xl",
        bg: "gray.600",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        transitionProperty: "all",
      }}
    >
      <Text
        fontSize={{ base: "md", md: "xl" }}
        fontWeight={"bold"}
        color={"white"}
      >
        {projectTitle}
      </Text>

      <Text color={"gray.400"} my="3" fontSize={{ base: "sm", md: "md" }}>
        {projectDesc}
      </Text>
    </Box>
  );
}

export default Card;
