import {
  Button,
  Container,
  Flex,
  Text,
  Circle,
  Box,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { stagger, fadeInUp } from "./Animation";
import { motion } from "framer-motion";
import ContainerComponents from "./ContainerComponents";

// landing function exported here

const Landing = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const pcolor = useColorModeValue("gray.600", "gray.400");
  const linkColor = useColorModeValue("purple.800", "purple.400");

  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <ContainerComponents>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          alignItems="start"
        >
          <Flex
            direction="column"
            my={{ base: "0", lg: "20" }}
            mb={{ base: "20", lg: "10" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* introduction */}
            <motion.div variants={fadeInUp}>
              <Text
                fontSize="xl"
                letterSpacing="wide"
                pb="5"
                color={textColor}
                fontWeight={"bold"}
              >
                Hi,I am Saurav Ghimire.
              </Text>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Text
                color={pcolor}
                maxW={{ base: "100%", lg: "70%" }}
                fontSize={"md"}
              >
                I&apos;m a developer and a student of technology. I work at{" "}
                <t />
                <Link color={linkColor}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://darshansolutions.com"}
                  >
                    Darshan Solutions <t />
                  </a>
                </Link>
                as a full stack developer and also a part of core management
                team. Having fun while bulding is my passion. I'm also a great
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

              <motion.div variants={fadeInUp}>
                <SocialLinks
                  iconAriaName="linkedin"
                  iconName={<AiFillLinkedin />}
                  linkButton="https://bit.ly/3JoLw6P"
                />
              </motion.div>
            </Flex>

            <motion.div variants={stagger}>
              <Flex
                pt="5"
                gridGap="3"
                justifyContent={{ base: "center", lg: "start" }}
              ></Flex>
            </motion.div>
          </Flex>

          {/*my profile image container */}
          <motion.div
            variants={fadeInUp}
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src={"/logo3.png"}
              alt="Saurav Ghimire"
              margin="0"
              padding={"0"}
              mx={{ base: "auto", lg: "0" }}
              boxSize={{ base: "xs", lg: "xs" }}
            ></Image>
          </motion.div>
        </Flex>
      </ContainerComponents>
    </motion.div>
  );
};

export default Landing;
