import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
function index({ href, label }) {
  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        variant="ghost"
        aria-label={label}
        color="primary"
        my="5"
        mr="5"
        w="90%"
      >
        {label}
      </Button>
    </NextLink>
  );
}
export default index;
