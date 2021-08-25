import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
const BlogsCards = ({
  blogTitle,
  publishedAt,
  blogDescription,
  imageSrc = "",
  slug,
}) => {
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
        <Image src={imageSrc} width="3" height="3" layout="responsive"></Image>
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
          {blogTitle}
        </Text>

        <Text
          width="85%"
          textAlign="justify"
          pb="5"
          color="gray.500"
          isTruncated
          letterSpacing="wider"
        >
          {blogDescription}
        </Text>

        <Text variant="date" color="green.700">
          {publishedAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogsCards;
