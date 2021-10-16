import Image from "next/image";

import { Flex, Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import char1 from "../../src/svg/char1.svg";

import { FormattedMessage } from "react-intl";

export default function AboutContact() {
  return (
    <Flex
      m={{ base: 2, sm: 10, md: 20 }}
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Flex
        p="4"
        flexBasis="40%"
        justifyContent={{ base: "center", sm: "flex-end" }}
      >
        <div>
          <Image src={char1} alt="A charachter" />
          <Text
            fontSize={{ base: "lg", sm: "larger" }}
            fontWeight="bold"
            color="gray.500"
          >
            <FormattedMessage defaultMessage="Marwa Jawad" />
          </Text>
        </div>
      </Flex>
      <Box p="4" flex="1">
        <Flex
          mb="15px"
          color="#FF867F"
          w="150px"
          justifyContent="space-between"
        >
          <BsTwitter size={20} cursor="pointer" />
          <FaLinkedinIn size={20} cursor="pointer" />
          <AiFillInstagram size={20} cursor="pointer" />
          <FaFacebookF size={20} cursor="pointer" />
        </Flex>
        <Textarea
          placeholder="Write something about us"
          size="sm"
          maxH="150px"
          h="150px"
          maxW={{ base: "100%", sm: "80%" }}
          boxShadow="0 5px 5px #00000022"
          borderRadius="7px"
        />
      </Box>
    </Flex>
  );
}
