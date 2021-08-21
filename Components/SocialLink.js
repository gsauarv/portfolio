import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
const SocialLinks = ({ iconAriaName, iconName, linkButton }) => {
  return (
    <Link href={linkButton}>
      <a target="_blank">
        <IconButton
          aria-label={iconAriaName}
          icon={iconName}
          size="md"
        ></IconButton>
      </a>
    </Link>
  );
};

export default SocialLinks;
