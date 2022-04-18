// styles
import { Grid, GridItem, Circle } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { ImLocation } from "react-icons/im";
import styles from "../../styles/donerCard.module.css";
import { number } from "yup";

export default function DonerCard({ name, bloodType, phone, city }) {
  return (
    <>
      <Box
        display="flex"
        className={styles.container}
        maxW="290px"
        width="100%"
        height="125px"
        alignItems="flex-end"
        borderRadius="xl"
        overflow="hidden"
        bg="#FF867F"
        boxShadow="0 3px 5px #00000044"
      >
        <Box w="100%" h="70%" borderRadius="xl" bg="white" pl="10px">
          <Grid
            w="100%"
            h="100%"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={0}
            padding="7px"
          >
            <GridItem rowSpan={1} colSpan={3} fontWeight="bold">
              {name}
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={2}
              display="flex"
              justifyContent="center"
            >
              <Circle
                size="60px"
                mt="-25px"
                justifySelf="center"
                borderWidth="4px"
                borderColor="white"
                bg="#C50E29"
                color="white"
              >
                {bloodType}
              </Circle>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={3}
              fontSize="smaller"
              opacity=".6"
              display="flex"
              alignItems="center"
            >
              <PhoneIcon w="10px" h="10px" margin="0 5px" /> {phone}
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={2}
              color="#FF867F"
              fontSize="small"
              opacity=".6"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ImLocation
                height="15px"
                width="15px"
                style={{ display: "inline" }}
              />{" "}
              {city}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
