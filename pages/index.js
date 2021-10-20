import MainWidget from "../components/Home/MainWidget";
import Statistics from "../components/Home/Statistics";
import { Box } from "@chakra-ui/react";
import Concerns from "../components/Home/Concerns";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <Box>
      <MainWidget />
      <Statistics />
      <Concerns />
      <Carousel interval={5000} direction={"right"} />
    </Box>
  );
}
