import {
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  useDisclosure,
  Divider,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
// Chakra Ui Imports ends kinda herer

// Icons from the chakra ui itself to indicate the toggle buttons for theme control

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// Using the ref for referencing the bottom
import { useRef } from "react";

// Ui mode selector from the chakra ui/
import { useColorMode, toggleColorMode } from "@chakra-ui/color-mode";

// Importing the logo from the public folder.
import DrawerLink from "./DrawerLink";
// For animation

import Link from "next/link";
const Navbar = () => {
  // Functions to control the drawer state.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxWidth={{
        base: "container.sm",
        md: "container.lg",
        xl: "1200",
      }}
      mt="5"
    >
      <Flex justify="space-between">
        {/* <Image src={logo} height={10}></Image> */}
        <Heading>
          <Link href="/">
            <a>Ghimire</a>
          </Link>
        </Heading>
        <Flex gridGap="5">
          {/* Button to toggle the colorMode */}
          <Tooltip
            fontSize="xs"
            closeDelay={0.05}
            hasArrow
            label={colorMode == "light" ? "Dark Mode" : "Light Mode"}
          >
            <IconButton
              aria-label="Toggle Color Mode"
              icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              outlineColor="none"
              _focus={{ outline: 0 }}
            />
          </Tooltip>

          {/* Button for the drawer  */}
          <Tooltip fontSize="xs" closeDelay={0.05} hasArrow label="Open Menu">
            <IconButton
              aria-label="Toggle Menu"
              icon={<HamburgerIcon />}
              ref={btnRef}
              onClick={onOpen}
              _focus={{ outline: 0 }}
            />
          </Tooltip>
        </Flex>
      </Flex>
      {/* Drawer Components */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ outline: 0 }}></DrawerCloseButton>
          <DrawerHeader>Navigation</DrawerHeader>
          <Divider />
          <DrawerBody pt="5">
            <Flex direction="column" gridGap="5" onClick={onClose}>
              <DrawerLink linkName="Home" linkPath="/" />
              <DrawerLink linkName="About" linkPath="/about" />
              <DrawerLink linkName="Blogs" linkPath="/blogs" />
              <DrawerLink linkName="Projects" linkPath="/projects" />
              <DrawerLink linkName="Contact" linkPath="/contact" />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Navbar;
