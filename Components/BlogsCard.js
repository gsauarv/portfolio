import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
const BlogsCards = () => {
  return (
    <Flex
      height={{ base: "100%", md: "100%", lg: "60" }}
      borderRadius="lg"
      gridGap="20"
      mt="28"
      overflow="hidden"
      flexWrap="wrap"
      justify="space-between"
      _hover={{
        boxShadow: "md",
        transition: "0.2 fade-in-out",
        cursor: "pointer",
      }}
    >
      <Box
        w={{ base: "sm", lg: "sm" }}
        height={{ base: "250", sm: "auto", lg: "auto" }}
        background="gray.400"
        overflow="hidden"
      >
        <Image
          width="3"
          height="3"
          loading="lazy"
          overflow="hidden"
          layout="responsive"
          src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-66076.jpg"
        ></Image>
      </Box>

      <Flex
        w={{ base: "100%", md: "100%", lg: "60%" }}
        direction="column"
        mb="10"
        p="5"
      >
        <Text
          letterSpacing="wider"
          fontSize="xl"
          fontWeight="bold"
          textTransform="capitalize"
          casing="lowercase"
          width={{ base: "100%", md: "100%", lg: "85%" }}
          textAlign="justify"
          pb="3"
          _hover={{
            textDecoration: "underline",
            textUnderlineOffset: 4,
            cursor: "pointer",
          }}
        >
          How to make the responsive layout using chakra ui.
        </Text>

        <Text
          width="85%"
          textAlign="justify"
          pb="5"
          color="gray.500"
          isTruncated
          letterSpacing="wider"
        >
          UI DESIGN | REACT
        </Text>

        <Text variant="date" color="green.700">
          2018/03/12
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogsCards;
