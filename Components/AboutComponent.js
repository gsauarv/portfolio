import { Circle, Container } from "@chakra-ui/layout";
import {
  Box,
  Flex,
  Heading,
  Text,
  Img,
  Button,
  Square,
} from "@chakra-ui/react";
import Link from "next/link";
import style from "../styles/about.module.css";
import Image from "next/image";
import { stagger, fadeInUp } from "./Animation";
import { motion } from "framer-motion";
const AboutComponent = () => {
  return (
    <Container
      maxWidth={{
        base: "full",
        md: "container.lg",
        xl: "1200",
      }}
    >
      <motion.div initial="initial" animate="animate">
        <Box w="100%" pt="100">
          <motion.div variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Text
                fontSize={{ base: "19px", lg: "28px", md: "24px" }}
                letterSpacing="wide"
                fontWeight="bold"
              >
                Hi, I&apos;m Saurav Ghimire
              </Text>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Text
                pt="5"
                fontSize="lg"
                color="gray.600"
                width={{ base: "full", md: "md", lg: "md" }}
              >
                Currently pursuing a Bachelor in Computer Science at
                Infrastructure University.
              </Text>
            </motion.div>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div variants={stagger}>
        <Flex
          mt="100"
          direction={{ base: "column", md: "row", lg: "row" }}
          overflow="hidden"
          gridGap="10"
        >
          <motion.div initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <div className={style.divImg}>
                <Image
                  width={1780}
                  height={3000}
                  className={style.mainImage}
                  quality="50"
                  alt="my image"
                  src="/me.jpg"
                  loading="lazy"
                ></Image>
              </div>
            </motion.div>
          </motion.div>

          <Flex
            direction="column"
            gridGap="5"
            width={{ base: "100%", md: "50%", lg: "40%" }}
            pt={{ base: 0, md: 10, lg: 10 }}
            mt={{ base: "0", md: "0", lg: "0" }}
            ml={{ base: "0", md: "10px", lg: "150px" }}
          >
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Text textAlign="justify" fontSize="md">
                My education and work experiences have taught me the need for
                constant learning and evolving in the career of a designer. I
                believe that there is no formula to a good user experience and
                every project provides an opportunity for discovery.
              </Text>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Text textAlign="justify" fontSize="md">
                With a passion for user-centered design, a problem solving
                approach, and a strong growth mindset, my intent is to test the
                boundaries of user interactions and create innovative product
                experiences.
              </Text>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Link href="https://drive.google.com/file/d/12yT-Gfko3H5Fbz3Q3-1ezOmRSYnpp8QL/view?usp=sharing">
                <a target="_blank" width="xs">
                  {" "}
                  <Button
                    variant="solid"
                    colorScheme="green"
                    width="xm"
                    mt="5"
                    mb="10"
                  >
                    View My Resume
                  </Button>
                </a>
              </Link>
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </Container>
  );
};

export default AboutComponent;
