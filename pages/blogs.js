import { Container, Flex } from "@chakra-ui/react";
import BlogsCards from "../Components/BlogsCard";

const Blogs = () => {
  return (
    <Container maxW="container.xl">
      <BlogsCards />
      <BlogsCards />
      <BlogsCards />

      <BlogsCards />
    </Container>
  );
};

export default Blogs;
