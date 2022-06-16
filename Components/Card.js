import {
  Box,
  SlideFade,
  keyframes,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Card({ projectName, projectLink, projectDescription, projectImage }) {
  return (
    <>
      <Link href={projectLink} target={"_blank"}>
        <Box borderRadius={"lg"} overflow={"hidden"} mt={"10"}>
          <Box>
            {/* image of the project goes here screenshot */}
            <Image src={projectImage} alt={projectName} />
          </Box>
          <Text
            fontSize={"18"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            py={"2"}
          >
            {projectName}
          </Text>
          <Text
            fontSize={"14"}
            textColor={"gray.400"}
            textTransform={"capitalize"}
          >
            {projectDescription}
          </Text>
        </Box>
      </Link>
    </>
  );
}

export default Card;
