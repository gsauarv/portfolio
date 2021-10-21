import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
const SocialLinks = ({ iconAriaName, iconName, linkButton, iconSize }) => {
  return (
    <Link href={linkButton}>
      <a target="_blank" rel="noopener">
        <IconButton
          aria-label={iconAriaName}
          icon={iconName}
          size={iconSize}
        ></IconButton>
      </a>
    </Link>
  );
};

export default SocialLinks;
