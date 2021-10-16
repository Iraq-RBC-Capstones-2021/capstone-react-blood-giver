import { Text, Flex, Stack, Box } from "@chakra-ui/react";
import Image from "next/image";
const index = (props) => {
  const { label, icon, number, id } = props.item;
  return (
    <Stack>
      <Box h="100px">
        <Image src={icon} alt={id} height={120} />
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize="50px" color="light">
          {number}
        </Text>
        <Text fontSize="24px" mt="2" ml="2" color="#979797">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default index;
