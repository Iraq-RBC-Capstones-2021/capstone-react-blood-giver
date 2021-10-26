import { Grid, GridItem, Flex, Box, Text, Spacer } from "@chakra-ui/react";
import Image from "next/image";
function index(props) {
  return (
    <Grid>
      {props.data.map((item, i) => (
        <GridItem key={i}>
          <Flex
            display={["row", "flex"]}
            justifyContent="space-between"
            flexDirection={`${item.rightIcon ? "row-reverse" : "row"}`}
          >
            <Box flex="60%">
              <Image alt={item.title} src={item.icon} />
            </Box>
            <Box flex="45%">
              <Text fontSize="30px">{item.title}</Text>
              <Text color="#3F3B3B" fontSize="20px">
                {item.text}
              </Text>
            </Box>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
}
export default index;
