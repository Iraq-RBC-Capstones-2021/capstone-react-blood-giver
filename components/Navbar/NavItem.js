import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
const Pages = ["Home", "Contact", "Donores", "About"];
function index() {
  return Pages.map((item, i) => (
    <div key={item}>
      <NextLink href={item === "Home" ? "/" : `/${item}`} passHref>
        <Button
          as="a"
          variant="ghost"
          aria-label={item}
          color="primary"
          my="5"
          mr="5"
          w="90%"
          key={i}
        >
          {item}
        </Button>
      </NextLink>
    </div>
  ));
}
export default index;