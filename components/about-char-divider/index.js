// hooks
import Image from "next/image";

// medias
import char1 from "../../src/svg/char1.svg";
import char2 from "../../src/svg/char2.svg";
import char3 from "../../src/svg/char3.svg";
import char4 from "../../src/svg/char4.svg";

// styles
import { Flex, Center, Square } from "@chakra-ui/layout";

export default function Divider() {
  return (
    <>
      <Flex color="white" bg="light" h="125px" pt={5}>
        <Flex height="100px" flexBasis="50%" justifyContent="flex-end">
          <Image src={char3} />
        </Flex>
        <Flex height="100px" justifyContent="center" flex="1">
          <Image src={char4} />
        </Flex>
      </Flex>
      <Flex color="white" bg="light" h="125px" pb={5}>
        <Flex height="100px" flexBasis="30%" justifyContent="flex-end">
          <Image src={char1} />
        </Flex>
        <Flex height="100px" flex="1" justifyContent="center">
          <Image src={char2} />
        </Flex>
      </Flex>
    </>
  );
}
