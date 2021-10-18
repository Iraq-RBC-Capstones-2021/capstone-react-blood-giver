import { Container, Box, Text, Flex } from "@chakra-ui/react";
import DonorCard from "../../components/doner-card";
import BloodType from "../../components/DropDown/BloodType";
import City from "../../components/DropDown/City";
function index() {
  const data = [
    {
      name: "ahmad saman",
      bloodType: "AB+",
      phoneNumber: "07508401999",
      city: "erbil",
    },
    {
      name: "Marwa jawad",
      bloodType: "O+",
      phoneNumber: "07508401999",
      city: "erbil",
    },
    {
      name: "Mahmoud Kassah",
      bloodType: "B+",
      phoneNumber: "07508401999",
      city: "erbil",
    },
    {
      name: "Elyas",
      bloodType: "A+",
      phoneNumber: "07508401999",
      city: "erbil",
    },
  ];
  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Text marginY="5" fontSize="3xl">
          Find Donor
        </Text>
        <Text marginY="5" fontSize="xl">
          You can filter the donors by the blood type or the city
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <City />
        <BloodType />
      </Box>
      <Flex wrap="wrap" gridGap="20px" marginY="5" justifyContent="center">
        {data.map((item) => (
          <DonorCard key={item.name} {...item} />
        ))}
      </Flex>
    </Container>
  );
}

export default index;
