import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import {
  DiDjango,
  DiReact,
  DiNpm,
  DiAndroid,
  DiPython,
  DiJava,
  DiJavascript,
  DiMysql,
  DiVisualstudio,
  DiCss3,
  DiGithubBadge,
} from "react-icons/di";
function SkillsComponents() {
  const iconColor = useColorModeValue("#2F855A", "#9AE6B4");
  return (
    <Box mb={"30"}>
      <Flex
        gap={"7"}
        justify={{ base: "center", lg: "flex-start" }}
        flexWrap={"wrap"}
        mb={{ base: "2", lg: "10", xl: "10" }}
      >
        {/* React */}
        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiReact />
        </Text>

        {/* Django */}
        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiDjango />
        </Text>

        {/* NPM */}
        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiNpm />
        </Text>

        {/* NPM */}
        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiAndroid />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiPython />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiJava />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiJavascript />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiMysql />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiVisualstudio />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiCss3 />
        </Text>

        <Text color={"gray.600"} fontSize={"30"} _hover={{ color: iconColor }}>
          <DiGithubBadge />
        </Text>
      </Flex>
    </Box>
  );
}

export default SkillsComponents;
