import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Styles from "../styles/blog.module.css";
import AuthorAvatar from "./AuthorAvatar";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animation";
import BackButton from "./BackButton";
import ContainerComponents from ".././Components/ContainerComponents";

const BlogDetailsComponent = ({
  blogDescription,
  blogTitle,
  body,
  goToName,
  goToHref,
}) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <ContainerComponents>
        {/* Tooltip to show the purpose of the icon button */}
        <Box maxW={{ base: "50%", lg: "10%", xl: "20%" }} mt={10}>
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
        ></motion.div>
        {/* Heading of the blog */}

        <motion.div variants={fadeInUp}>
          <ContainerComponents>
            <Text
              letterSpacing="wide"
              mt="20"
              lineHeight="tall"
              textTransform="capitalize"
              fontWeight="bold"
              fontSize={{ base: "19px", lg: "24px", md: "20px" }}
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
          </ContainerComponents>
        </motion.div>
      </ContainerComponents>
    </motion.div>
  );
};

export default BlogDetailsComponent;
