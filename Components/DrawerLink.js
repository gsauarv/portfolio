import { motion } from "framer-motion";
import Link from "next/link";

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
        <a>{linkName}</a>
      </Link>
    </motion.ul>
  );
};

export default DrawerLink;
