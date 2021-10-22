import { Box, Flex } from "@chakra-ui/layout";
import PageHeading from "./PageHeading";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import Link from "next/link";

const CurrentProjectCard = ({
  projectTitle,
  projectDescription,
  languageUsed,
  relatedResources,
}) => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const languages = languageUsed;
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row", md: "column" }}
        align={{ lg: "center", md: "flex-start", base: "flex-start" }}
        gridGap={{ lg: "40", md: "10", base: "10" }}
        paddingTop="5rem"
        pb="2em"
      >
        <Box w={{ lg: "60%", md: "100%", base: "100%" }}>
          <PageHeading
            headingText={projectTitle}
            headingSize="xl"
            fontWeightSize="bold"
            styles={{
              paddingBottom: "10px",
            }}
          />
          <PageHeading
            headingText={projectDescription}
            headingSize="md"
            fontWeightSize="normal"
            styles={{
              color: textColor,
            }}
          />
          <Flex gridGap="5" pt="5">
            {languages.map((language) => (
              <a key={language.length}>
                <Button
                  variant="outline"
                  border="2px"
                  colorScheme="green"
                  borderRadius="lg"
                  fontWeight="semibold"
                  cursor="default"
                  _hover=""
                >
                  {language}
                </Button>
              </a>
            ))}
          </Flex>
        </Box>
        <div>
          <Link href={relatedResources}>
            <a target="_blank">
              <Button
                variant="outline"
                border="2px"
                borderTopEndRadius="0px"
                borderBottomLeftRadius="0px"
                colorScheme="green"
                py="6"
                borderRadius="lg"
              >
                Related Resources.
              </Button>
            </a>
          </Link>
        </div>
      </Flex>
    </>
  );
};

export default CurrentProjectCard;
