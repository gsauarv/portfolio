import { Flex, Box, Text } from "@chakra-ui/react";
const BlogsCards = ({ blogTitle, publishedAt, blogDescription }) => {
  return (
    <>
      <Box shadow="xl" mt="20" py="10" borderRadius="xl">
        <Flex
          w={{ base: "100%", md: "100%", lg: "60%" }}
          direction="column"
          mb="10"
          px="5"
        >
          <Text
            letterSpacing="wider"
            fontSize="xl"
            fontWeight="bold"
            textTransform="capitalize"
            casing="lowercase"
            width={{ base: "100%", md: "100%", lg: "85%" }}
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
      </Box>
    </>
  );
};

export default BlogsCards;
