import Image from "next/image";

import { Flex, Box, Text } from "@chakra-ui/layout";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import char2 from "../../src/svg/char2.svg";

import { FormattedMessage } from "react-intl";

export default function AboutContact() {
  return (
    <Flex
      m={{ base: 2, md: 5, lg: 20 }}
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Flex
        p="4"
        flexBasis="40%"
        justifyContent={{ base: "center", sm: "flex-end" }}
      >
        <div>
          <Image src={char2} alt="A charachter" />
          <Text
            fontSize={{ base: "lg", sm: "larger" }}
            fontWeight="bold"
            color="gray.500"
          >
            <FormattedMessage defaultMessage="Developer team" />
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
        <Box
          h="auto"
          maxW={{ base: "100%", sm: "80%" }}
          boxShadow="0 5px 5px #00000022"
          borderRadius="7px"
          p={5}
        >
          <FormattedMessage
            defaultMessage="
            Hi we're an experienced software engineers who constantly seek out 
            innovative solutions to everyday problems. In our period of developing 
            and finding solutions in this industry, we've honed our analytical 
            thinking and collaboration skills, and we love working as a team."
          />
        </Box>
      </Box>
    </Flex>
  );
}
