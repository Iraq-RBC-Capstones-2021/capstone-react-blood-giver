import Image from "next/image";

import { Flex, Center, Text, Heading } from "@chakra-ui/layout";

import { slideData } from "./flex-data";

export default function Informations() {
  return (
    <>
      {slideData.map(({ id, heading, text, image }, index) => {
        if (index % 2 !== 0) {
          return (
            <Flex
              key={id}
              m={{ base: "125px 5px", sm: 10, md: 20, xl: 40 }}
              color="black"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Center
                flexBasis="50%"
                flexDirection="column"
                textAlign="center"
                pr={{ base: 10, md: 20 }}
                pl={{ base: 10, md: 20 }}
              >
                <Heading
                  mb={15}
                  color="gray.500"
                  fontSize={{ base: "larger", md: "xx-large" }}
                >
                  {heading}
                </Heading>
                <Text fontSize={{ base: "small", md: "large" }}>{text}</Text>
              </Center>
              <Center flexBasis="50%" color="black">
                <Image src={image} alt="A charachter" />
              </Center>
            </Flex>
          );
        }
        return (
          <Flex
            key={id}
            m={{ base: "125px 5px", sm: 10, md: 20, xl: 40 }}
            color="black"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Center flexBasis="50%" color="black">
              <Image src={image} alt="A charachter" />
            </Center>
            <Center
              flexBasis="50%"
              flexDirection="column"
              textAlign="center"
              pr={{ base: 10, md: 20 }}
              pl={{ base: 10, md: 20 }}
            >
              <Heading
                mb={15}
                color="gray.500"
                fontSize={{ base: "larger", md: "xx-large" }}
              >
                {heading}
              </Heading>
              <Text fontSize={{ base: "small", md: "large" }}>{text}</Text>
            </Center>
          </Flex>
        );
      })}
    </>
  );
}
