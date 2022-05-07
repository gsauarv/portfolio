import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import ContainerComponents from "./ContainerComponents";
import DrawerLink from "./DrawerLink";
import FooterNavLinks from "./FooterNavLinks";

const Footer = () => {
  return (
    <ContainerComponents>
      <Divider mt={"20"} />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justify={"space-between"}
        alignItems={{ base: "center", md: "flex-start" }}
        mt={5}
        gap={{ base: "10", md: "0" }}
      >
        {/* nav link box */}
        <Box>
          {/* footer nav links */}
          <FooterNavLinks navTitle={"Home"} navLink={"/"} />
          <FooterNavLinks navTitle={"Projects"} navLink={"/projects"} />
          <FooterNavLinks navTitle={"Blogs"} navLink={"/blogs"} />
          <FooterNavLinks navTitle={"Contact"} navLink={"/contact"} />
        </Box>

        <Box>
          <FooterNavLinks navTitle={"Github"} />
          <FooterNavLinks navTitle={"Instagram"} />
          <FooterNavLinks navTitle={"LinkedIn"} />
          <FooterNavLinks navTitle={"Youtube"} />
          <FooterNavLinks navTitle={"Facebook"} />
        </Box>

        <Flex
          flexDirection={"column"}
          mt={"2"}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <FormLabel color={"gray.600"} fontSize={"sm"}>
            Register for newsletter
          </FormLabel>
          <Flex alignItems={"center"}>
            <Input placeholder="elonmusk@tesla.com" />
            <Button ml={"5"} fontSize={"sm"}>
              Send
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </ContainerComponents>
  );
};

export default Footer;
