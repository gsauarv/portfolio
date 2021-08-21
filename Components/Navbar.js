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
  Text,
  Heading,
  Center,
  Box,
} from "@chakra-ui/react";
// Chakra Ui Imports ends kinda herer

// importing the Image from the next/image module i.e for the image optimization
// which is the one of the reason to use the next insted of the plain react.

import Image from "next/image";

// Icons from the chakra ui itself to indicate the toggle buttons for theme control

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// Importing the link from the next/link as it will help the server pre-render(generate) the
// static sites.
import Link from "next/link";

// Using the ref for referencing the bottom
import { useRef } from "react";

// Ui mode selector from the chakra ui/
import { useColorMode, toggleColorMode } from "@chakra-ui/color-mode";

// Importing the logo from the public folder.
import logo from "../public/icon.svg";
const Navbar = () => {
  // Functions to control the drawer state.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxWidth="container.xl" mt="5">
      <Flex justify="space-between">
        {/* <Image src={logo} height={10}></Image> */}
        <Heading>Ghimire</Heading>
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
        motionPreset="slideInRight"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ outline: 0 }}></DrawerCloseButton>
          <DrawerHeader>Navigation</DrawerHeader>
          <Divider />
          <DrawerBody pt="5">
            <Flex direction="column" gridGap="5">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/project">
                <a>Projects</a>
              </Link>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>

              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Navbar;
