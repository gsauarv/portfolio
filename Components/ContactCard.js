import { Flex, Heading, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLink";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const ContactCard = () => {
  return (
    <Flex marginTop="20" direction="column">
      <Heading fontSize="xx-large" letterSpacing="wide">
        Let's get in touch.
      </Heading>
      <Text mt="20" mb="2" fontSize="xl" letterSpacing="wide" color="gray.600">
        Let's Talk business.
      </Text>
      <Text fontSize="lg" letterSpacing="wide">
        gsaurav2000@gmail.com
      </Text>
      <Text mt="12" mb="2" fontSize="xl" letterSpacing="wide" color="gray.600">
        Social Links
      </Text>

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
      </Flex>
    </Flex>
  );
};

export default ContactCard;
