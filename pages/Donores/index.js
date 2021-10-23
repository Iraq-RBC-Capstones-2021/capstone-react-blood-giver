import { Container, Box, Text } from "@chakra-ui/react";
import { wrapper } from "../../store";
import { fetchDonors } from "../../store/donors/donorSlice";
import ContainerDonors from "../../components/donor-content/Container";
function index() {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Text marginY="5" fontSize="3xl">
          Find Donors
        </Text>
        <Text marginY="5" fontSize="xl">
          You can filter the donors by the blood type or the city
        </Text>
        <ContainerDonors />
      </Box>
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchDonors());
});
export default index;
