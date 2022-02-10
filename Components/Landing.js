import {
  Button,
  Container,
  Flex,
  Text,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { stagger, fadeInUp } from "./Animation";
import { motion } from "framer-motion";

// landing function exported here

const Landing = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Container
        maxWidth={{
          base: "100%",
          md: "container.lg",
          xl: "1200",
        }}
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          alignItems={"center"}
        >
          <Flex
            direction="column"
            my={{ base: "0", lg: "5" }}
            mb={{ base: "20", lg: "10" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* introduction */}
            <motion.div variants={fadeInUp}>
              <Text
                fontSize="xl"
                letterSpacing="wide"
                pb="5"
                color="gray.100"
                fontWeight={"bold"}
              >
                Hi,I am Saurav Ghimire.
              </Text>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Text
                color={"gray.300"}
                w={{ base: "100%", lg: "80%" }}
                fontSize={"md"}
              >
                I&apos;m a developer and a student of technology. I work at{" "}
                <t />
                <Link color={"purple.400"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://darshansolutions.com"}
                  >
                    Darshan Solutions <t />
                  </a>
                </Link>
                as a full stack developer and also a part of core management
                team. Having fun while bulding is my passion. I also a great
                learner and reader who love to learn new things.
              </Text>
            </motion.div>

            {/* social media card */}

            <motion.div variants={fadeInUp}>
              <Text fontSize="md" pt="5" pb="5" color="gray.500">
                Follow me on social media to know me better.
              </Text>
            </motion.div>
            <Flex
              gridGap="3"
              pb="5"
              justifyContent={{ base: "center", lg: "start" }}
            >
              <motion.div variants={fadeInUp}>
                <SocialLinks
                  iconAriaName="Github"
                  iconName={<AiFillGithub />}
                  linkButton="https://github.com/gsauarv"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SocialLinks
                  iconAriaName="youtube"
                  iconName={<AiFillYoutube />}
                  linkButton="https://www.youtube.com/channel/UClTCDuid2XiJukenc1NRSpQ"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SocialLinks
                  iconAriaName="instagram"
                  iconName={<AiFillInstagram />}
                  linkButton="https://instagram.com/gh_saurav"
                />
              </motion.div>
            </Flex>

            <motion.div variants={stagger}>
              <Flex
                pt="5"
                gridGap="3"
                justifyContent={{ base: "center", lg: "start" }}
              >
                <motion.div variants={fadeInUp}>
                  <Link href="/projects" _hover={{ textDecoration: "none" }}>
                    <Button
                      size="lg"
                      fontSize="sm"
                      _focus={{ outline: 0 }}
                      letterSpacing="wider"
                      colorScheme="green"
                    >
                      View My Projects
                    </Button>
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="https://drive.google.com/u/0/uc?id=12yT-Gfko3H5Fbz3Q3-1ezOmRSYnpp8QL&export=download"
                    _hover={{ textDecoration: "none" }}
                  >
                    <a>
                      <Button
                        size="lg"
                        fontSize="sm"
                        _focus={{ outline: 0 }}
                        letterSpacing="wider"
                        variant="outline"
                        // rightIcon={
                        //   <AiOutlineCloudDownload fontSize="24" fontWeight="bold" />
                        // }
                      >
                        Download My CV
                      </Button>
                    </a>
                  </Link>
                </motion.div>
              </Flex>
            </motion.div>
          </Flex>

          {/*my profile image container */}

          <Image
            margin={"0"}
            src={"/me.png"}
            alt="Saurav Ghimire"
            borderRadius="full"
            mx={{ base: "auto", lg: "0" }}
            boxSize={{ base: "xs", lg: "md" }}
          ></Image>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Landing;
