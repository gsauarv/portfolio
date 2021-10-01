import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { stagger, fadeInUp } from "./Animation";
import { motion } from "framer-motion";
import Link from "next/link";
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
          direction="column"
          justify="center"
          minHeight="50%"
          height="container.md"
          backgroundSize="cover"
          overflow="hidden"
        >
          <motion.div variants={fadeInUp}>
            <Text
              fontSize="md"
              letterSpacing="wide"
              pt="5"
              pb="5"
              color="gray.500"
            >
              Saurav Ghimire
            </Text>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text
              letterSpacing="normal"
              fontWeight="bold"
              maxW={{ base: "100%", xl: "70%", md: "100%" }}
              lineHeight="tall"
              textTransform="capitalize"
              fontSize="xx-large"
            >
              A passionate student from Kathmandu,NP Who loves solving the
              problems and playing minecraft.
            </Text>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Text
              fontSize="md"
              letterSpacing="wide"
              pt="5"
              pb="5"
              color="gray.500"
            >
              Follow me on social media to know me better.
            </Text>
          </motion.div>
          <Flex gridGap="3" pb="5">
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
            <Flex pt="5" gridGap="3">
              <motion.div variants={fadeInUp}>
                <Link href="/projects">
                  <a>
                    <Button
                      size="lg"
                      fontSize="sm"
                      _focus={{ outline: 0 }}
                      letterSpacing="wider"
                      colorScheme="green"

                      // rightIcon={<AiOutlineNodeExpand fontSize="24" fontWeight="bold" />}
                    >
                      View My Projects
                    </Button>
                  </a>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
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
              </motion.div>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Landing;
