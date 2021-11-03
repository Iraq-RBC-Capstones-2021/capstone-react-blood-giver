import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
const Pages = [
  { title: <FormattedMessage defaultMessage="Home" />, route: "/" },
  { title: <FormattedMessage defaultMessage="Contact" />, route: "/contact" },
  { title: <FormattedMessage defaultMessage="Donors" />, route: "/donors" },
  { title: <FormattedMessage defaultMessage="About" />, route: "/about" },
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
