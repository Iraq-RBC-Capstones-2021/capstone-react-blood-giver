import { Flex, Text } from "@chakra-ui/layout";
import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

function BloodBox({ data, setData }) {
  function handleCheck(el, i) {
    setData((prev) => {
      return prev.map((element, index) => {
        if (index === i) {
          return { ...element, checked: !element.checked };
        } else {
          return element;
        }
      });
    });
  }
  return (
    <>
      {data.map((el, i) => (
        <Flex key={i} justifyContent="left">
          <Button
            width="5"
            borderRadius="full"
            border="1px"
            borderColor="primary"
            bg={el.checked === true ? "light" : "white"}
            onClick={() => handleCheck(el, i)}
          >
            <Text>
              {el.checked === true ? <CheckIcon color="white" /> : ""}
            </Text>
          </Button>

          <Text alignSelf="center" fontSize="md" marginX="3">
            {el.bloodType}
          </Text>
        </Flex>
      ))}
    </>
  );
}

export default BloodBox;
