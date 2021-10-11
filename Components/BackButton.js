import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const BackButton = ({ goToHref, goToName }) => {
  return (
    <Link href={goToHref}>
      <a>
        <Flex
          direction="row"
          maxW="fit-content"
          gridGap="5"
          justify="center"
          alignItems="center"
        >
          <Text
            _hover={{ textDecoration: "underline", textUnderlineOffset: 5 }}
          >
            {"<-"} {goToName}
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default BackButton;
