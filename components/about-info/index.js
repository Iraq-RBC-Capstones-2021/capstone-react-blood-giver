// hooks
import Image from "next/image";

// style
import { Flex, Center, Text, Heading } from "@chakra-ui/layout";

// data
import { slideData } from "./flex-data";

export default function Informations() {
  return (
    <>
      {slideData.map(({ heading, text, image }, index) => {
        if (index % 2 !== 0) {
          return (
            <Flex color="white" ml={40} mr={40} color="black" mt={40} mb={40}>
              <Center
                flexBasis="50%"
                flexDirection="column"
                textAlign="center"
                pr={20}
                pl={20}
              >
                <Heading mb={15} color="gray.500" size="lg">
                  {heading}
                </Heading>
                <Text>{text}</Text>
              </Center>
              <Center flexBasis="50%" color="black">
                <Image src={image} />
              </Center>
            </Flex>
          );
        }
        return (
          <Flex color="white" ml={40} mr={40} color="black" mt={40} mb={40}>
            <Center flexBasis="50%" color="black">
              <Image src={image} />
            </Center>
            <Center
              flexBasis="50%"
              flexDirection="column"
              textAlign="center"
              pr={20}
              pl={20}
            >
              <Heading mb={15} color="gray.500" size="lg">
                {heading}
              </Heading>
              <Text>{text}</Text>
            </Center>
          </Flex>
        );
      })}
    </>
  );
}
