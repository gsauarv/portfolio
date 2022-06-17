import { Flex, Heading, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { fadeInUp, stagger } from "./Animation";
import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Flex marginTop="20" direction="column">
        <motion.div variants={fadeInUp}>
          <Text fontSize={"lg"} letterSpacing="wide" fontWeight="bold">
            Let&apos;s get in touch.
          </Text>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Text
            mt="10"
            mb="2"
            fontSize="sm"
            letterSpacing="wide"
            color="gray.600"
          >
            Let&apos;s Talk business.
          </Text>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Text fontSize="md" letterSpacing="wide">
            gsaurav2000@gmail.com
          </Text>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Text mt="10" mb="5" fontSize="md" letterSpacing="wide">
            Social Links
          </Text>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Flex gridGap="3">
            <SocialLinks
              iconAriaName="Github"
              iconName={<AiFillGithub fontSize="18" />}
              linkButton="https://github.com/gsauarv"
            />

            <SocialLinks
              iconAriaName="Instagram"
              iconName={<AiFillInstagram fontSize="18" />}
              linkButton="https://instagram.com/gh_saurav"
            />

            <SocialLinks
              iconAriaName="LinkedIn"
              iconName={<AiFillLinkedin fontSize="18" />}
              linkButton="https://www.linkedin.com/in/saurav-ghimire-13a284159/"
            />

            <SocialLinks
              iconAriaName="Youtube"
              iconName={<AiFillYoutube fontSize="18" />}
              linkButton="https://www.youtube.com/channel/UClTCDuid2XiJukenc1NRSpQ"
            />
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default ContactCard;
