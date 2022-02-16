import { Box, Circle, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

function BlogCards() {
  const date = new Date();
  return (
    <div>
      <Box
        shadow="base"
        m="2"
        p={"5"}
        mt={"10"}
        mb={"5"}
        rounded="md"
        _hover={{
          shadow: "2xl",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          transitionProperty: "all",
        }}
      >
        <Text
          fontSize={{ base: "md", md: "xl" }}
          fontWeight={"bold"}
          colorScheme={"whiteAlpha"}
        >
          How to create a React App using create-react-app
        </Text>

        {/* date and read status */}

        <Flex
          alignItems={"center"}
          gap="2"
          fontSize={{ base: "x-small", md: "sm" }}
        >
          <Text color={"gray.600"} my="3">
            {date.toDateString()}
          </Text>
          <Circle size={"2"} bg={"gray.600"} />
          <Text color={"gray.600"} my="3">
            2 min read
          </Text>
        </Flex>

        <Text color={"gray.600"} fontSize={{ base: "sm", md: "md" }}>
          My Take On The History Of Mobile Devices And The Evolution Of Mobile
          Programming.{" "}
        </Text>
      </Box>
    </div>
  );
}

export default BlogCards;
