import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const FooterNavLinks = ({ navTitle, navLink = "#" }) => {
  return (
    <NextLink href={navLink} passHref>
      <Link color={"gray.600"}>
        <Text color={"gray.600"} mt={"2"} fontSize={"sm"} mb={"2"}>
          {navTitle}
        </Text>
      </Link>
    </NextLink>
  );
};

export default FooterNavLinks;
