import {
  Box,
  SlideFade,
  keyframes,
  Text,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

function Card({ projectName, projectLink, projectDescription, projectImage }) {
  return (
    <>
      <Link href={projectLink} target={"_blank"}>
        <Box borderRadius={"lg"} overflow={"hidden"} mt={"10"}>
          <Box>
            {/* image of the project goes here screenshot */}
            <Image
              src={"https:" + projectImage.fields.file.url}
              alt={projectName}
              opacity={"70%"}
            />
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
