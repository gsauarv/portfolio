import {
  Container,
  Tooltip,
  IconButton,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Styles from "../styles/blog.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import AuthorAvatar from "./AuthorAvatar";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animation";
const BlogDetailsComponent = ({
  blogDescription,
  blogTitle,
  body,
  mainImage,
}) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container maxW="container.xl" mt="20">
        {/* Tooltip to show the purpose of the icon button */}
        <Tooltip hasArrow label="Go back to blogs">
          <Link href="/blogs">
            <a>
              <motion.div variants={fadeInUp}>
                <IconButton mb="10" rounded="3xl" icon={<AiOutlineLeft />} />
              </motion.div>
            </a>
          </Link>
        </Tooltip>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Box height="xl" mt="10" overflow="hidden">
            <Image
              src={mainImage}
              width="3"
              height="3"
              layout="responsive"
              alt="mainImage"
            />
          </Box>
        </motion.div>
        {/* Heading of the blog */}

        <motion.div variants={fadeInUp}>
          <Container
            maxW="65%"
            mt="10"
            mb="36"
            justifyContent="center"
            alignItems="center"
            textAlign="justify"
          >
            <Heading
              fontSize="xx-large"
              letterSpacing="normal"
              mt="20"
              lineHeight="tall"
              textTransform="capitalize"
              fontWeight="bold"
            >
              {blogTitle}
            </Heading>
            <AuthorAvatar />

            <BlockContent
              className={Styles.blockContent}
              blocks={body}
              projectId="myprojectid"
              dataset="mydataset"
            ></BlockContent>
          </Container>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BlogDetailsComponent;
