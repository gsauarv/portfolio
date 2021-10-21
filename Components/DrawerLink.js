import { motion } from "framer-motion";
import Link from "next/link";
import { Flex } from "@chakra-ui/layout";

const DrawerLink = ({ linkName, linkPath }) => {
  return (
    <motion.ul
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      <Link href={linkPath}>
        <a>
          <Flex
            _hover={{
              backgroundColor: "#9AE6B4",
              borderRadius: 10,
              color: "black",
            }}
            px="2"
            py="2"
          >
            {linkName}
          </Flex>
        </a>
      </Link>
    </motion.ul>
  );
};

export default DrawerLink;
