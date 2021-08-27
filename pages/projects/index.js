import { Container, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../Components/Animation";
import BlogsCards from "../../Components/BlogsCards";
import Link from "next/link";
const project = () => {
  return (
    <motion.div initial="initial" animate="animate" variant={stagger}>
      <Container maxW="container.xl" mt="20">
        <Text fontSize="x-large" fontWeight="bold" mb="20">
          Things I &apos; ve Been Working On.
        </Text>
        <Flex direction="column">
          <motion.div variants={fadeInUp}>
            <Link href={"projects/a"}>
              <a>
                <BlogsCards
                  blogTitle="hello"
                  blogDescription="React | Javascript"
                  publishedAt="2018/0/14"
                />
              </a>
            </Link>
          </motion.div>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default project;
