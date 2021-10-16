import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
const Pages = [
  { title: "Home", route: "/" },
  { title: "Contact", route: "/Contact" },
  { title: "Donores", route: "/Donores" },
  { title: "About", route: "/About" },
];
function index() {
  return Pages.map((item, i) => (
    <div key={i}>
      <NextLink href={item.route} passHref>
        <Button
          as="a"
          variant="ghost"
          aria-label={item.title}
          color="primary"
          my="5"
          mr="5"
          w="90%"
          key={i}
        >
          {item.title}
        </Button>
      </NextLink>
    </div>
  ));
}
export default index;
