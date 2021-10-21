import { Text } from "@chakra-ui/layout";

/**
 *
 * @returns require props for heading
 * headingSize: xl,lg,sm,md,x-large
 */
const PageHeading = ({ headingText, headingSize, fontWeightSize, styles }) => {
  return (
    <>
      <Text fontSize={headingSize} fontWeight={fontWeightSize} {...styles}>
        {headingText}
      </Text>
    </>
  );
};

export default PageHeading;
