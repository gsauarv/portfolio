import { Container, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Styles from "../styles/blog.module.css";
import AuthorAvatar from "./AuthorAvatar";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animation";
import { PortableText } from "../lib/sanity";
import BackButton from "./BackButton";

const BlogDetailsComponent = ({
  blogDescription,
  blogTitle,
  body,
  goToName,
  goToHref,
}) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container
        maxWidth={{
          base: "container.sm",
          md: "container.lg",
          xl: "1200",
        }}
        mt="20"
      >
        {/* Tooltip to show the purpose of the icon button */}
        <Box maxW={{ base: "50%", lg: "10%", xl: "20%" }}>
          <Link href="/blogs">
            <a width="10%">
              <motion.div variants={fadeInUp}>
                <BackButton goToName={goToName} goToHref={goToHref} />
              </motion.div>
            </a>
          </Link>
        </Box>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* <Box height="xl" mt="10" overflow="hidden">
            <Image
              src={mainImage}
              width="3"
              height="3"
              layout="responsive"
              alt="mainImage"
            />
          </Box> */}
        </motion.div>
        {/* Heading of the blog */}

        <motion.div variants={fadeInUp}>
          <Container
            maxW={{ base: "100%", md: "70%", xl: "70%" }}
            mt="10"
            mb="36"
            justifyContent="center"
            alignItems="center"
            letterSpacing="wide"
          >
            <Text
              letterSpacing="wide"
              mt="20"
              lineHeight="tall"
              textTransform="capitalize"
              fontWeight="bold"
              fontSize={{ base: "16px", lg: "24px", md: "20px" }}
            >
              {blogTitle}
            </Text>
            <Text fontSize="sm" color="gray.500" mt="5" mb="10">
              {blogDescription}
            </Text>
            <AuthorAvatar />

            <PortableText
              className={Styles.blockContent}
              blocks={body}
            ></PortableText>
          </Container>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BlogDetailsComponent;
