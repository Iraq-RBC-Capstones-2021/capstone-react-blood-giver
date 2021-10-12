import { Box } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";

const index = () => {
  return (
    <Box d="flex" gridGap="5" py="5" color="white">
      <GrTwitter cursor="pointer" />
      <RiLinkedinFill cursor="pointer" />
      <AiFillInstagram cursor="pointer" />
      <FaFacebookF cursor="pointer" />
    </Box>
  );
};

export default index;
