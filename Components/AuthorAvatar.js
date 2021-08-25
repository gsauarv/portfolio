import {
  Avatar,
  WrapItem,
  Text,
  Stack,
  AvatarGroup,
  Heading,
  Flex,
} from "@chakra-ui/react";

const AuthorAvatar = () => {
  return (
    <Stack direction="row" alignItems="center" mt="5" mb="10">
      <Avatar
        size="md"
        name="Saurav Ghimire"
        src="https://pbs.twimg.com/profile_images/1248946272288927745/FB3qkyYZ.jpg"
      />
      <Flex direction="column">
        <Text fontSize="md" fontWeight="bold">
          Saurav Ghimire
        </Text>
        <Text fontSize="sm">Author/Creator</Text>
      </Flex>
    </Stack>
  );
};

export default AuthorAvatar;
