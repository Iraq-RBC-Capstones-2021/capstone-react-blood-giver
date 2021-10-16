import styles from "../styles/Home.module.css";
import MainWidget from "./Home/MainWidget";
import Statistics from "./Home/Statistics";
import { Box } from "@chakra-ui/react";
import Concerns from "./Home/Concerns";
export default function Home() {
  return (
    <Box>
      <MainWidget />
      <Statistics />
      <Concerns />
    </Box>
  );
}
