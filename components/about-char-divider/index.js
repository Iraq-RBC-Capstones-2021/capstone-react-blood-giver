import Image from "next/image";

import char1 from "../../src/svg/char1.svg";
import char2 from "../../src/svg/char2.svg";
import char3 from "../../src/svg/char3.svg";
import char4 from "../../src/svg/char4.svg";

import { Flex } from "@chakra-ui/layout";

export default function Divider() {
  return (
    <>
      <Flex
        color="white"
        bg="light"
        h={{ base: "350px", sm: "125px" }}
        pt={5}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Flex
          height="100px"
          flexBasis="60%"
          justifyContent="flex-end"
          pr={{ base: "50px" }}
        >
          <Image src={char3} alt="charachter in divider section" />
        </Flex>
        <Flex
          height="100px"
          justifyContent="center"
          flex="1"
          pr={{ base: "120px" }}
        >
          <Image src={char4} alt="charachter in divider section" />
        </Flex>
      </Flex>
      <Flex
        color="white"
        bg="light"
        h="125px"
        pb={5}
        display={{ base: "none", sm: "flex" }}
      >
        <Flex height="100px" flexBasis="30%" justifyContent="flex-end">
          <Image src={char1} alt="charachter in divider section" />
        </Flex>
        <Flex height="100px" flex="1" justifyContent="center">
          <Image src={char2} alt="charachter in divider section" />
        </Flex>
      </Flex>
    </>
  );
}
