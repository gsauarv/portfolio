import { Flex, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { fadeInUp, stagger } from "./Animation";
import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Flex marginTop="20" direction="column">
        <motion.div variants={fadeInUp}>
          <Text
            fontSize={{ base: "19px", lg: "28px", md: "24px" }}
            letterSpacing="wide"
            fontWeight="bold"
          >
            Let&apos;s get in touch.
          </Text>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Text
            mt="20"
            mb="2"
            fontSize="xl"
            letterSpacing="wide"
            color="gray.600"
          >
            Let&apos;s Talk business.
          </Text>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Text fontSize="lg" letterSpacing="wide">
            gsaurav2000@gmail.com
          </Text>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Text mt="10" mb="5" fontSize="lg" letterSpacing="wide">
            Social Links
          </Text>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Flex gridGap="3">
            <SocialLinks
              iconAriaName="Github"
              iconName={<AiFillGithub fontSize="20" />}
              linkButton="https://github.com/gsauarv"
            />

            <SocialLinks
              iconAriaName="Instagram"
              iconName={<AiFillInstagram fontSize="20" />}
              linkButton="https://instagram.com/gh_saurav"
            />

            <SocialLinks
              iconAriaName="Youtube"
              iconName={<AiFillYoutube fontSize="20" />}
              linkButton="https://www.youtube.com/channel/UClTCDuid2XiJukenc1NRSpQ"
            />
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default ContactCard;
