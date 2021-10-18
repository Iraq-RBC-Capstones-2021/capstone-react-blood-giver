import { Text, Box, Flex, Image } from "@chakra-ui/react";

function Content({ slide }) {
  return (
    <Box flex="none" boxSize="full">
      <Flex display={["block", "block", "flex", "flex"]}>
        <Box
          w={["100%", "100%", "50%", "50%"]}
          p="30px"
          border="2px"
          borderColor="gray.100"
          borderRadius="lg"
          margin={["0px 0px 10px 0px", "0px 0px 10px 0px", "5", "5"]}
        >
          <Text fontSize={["xl", "xl", "3xl", "3xl"]} color="#979797" mb="5">
            {slide.text.header}
          </Text>
          <Text fontSize={["md", "md", "xl", "xl"]}>{slide.text.body}</Text>
        </Box>
        <Box
          w={["100%", "100%", "50%", "50%"]}
          borderRadius="lg"
          margin={["0", "0", "5", "5"]}
        >
          <Image
            src={slide.img}
            alt="img"
            border="2px"
            borderColor="skin"
            borderRadius="lg"
            w="full"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Content;
