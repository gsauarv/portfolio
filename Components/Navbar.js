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
  Box,
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
import FooterNavLinks from "../Components/FooterNavLinks";

import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  // Functions to control the drawer state.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxWidth={{
        base: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
      mt="5"
    >
      <Flex justify="space-between" overflow="hidden">
        <Link href="/">
          <a>
            <Image
              src={"/logo3.png"}
              alt="Saurav Ghimire"
              width={"70px"}
              height={"70px"}
              quality={100}
            ></Image>
          </a>
        </Link>

        <Flex gridGap="5">
          <Box display={{ base: "none", md: "block" }}>
            <Flex gridGap={"5"}>
              <DrawerLink linkName={"Home"} linkPath={"/"} />
              <DrawerLink linkName={"Blogs"} linkPath={"/blogs"} />
              <DrawerLink linkName={"Projects"} linkPath={"/projects"} />
              <DrawerLink linkName={"Contact"} linkPath={"/contact"} />
            </Flex>
          </Box>
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
              display={{ base: "block", md: "none" }}
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
