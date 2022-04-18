import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import ClickAwayListener from "react-click-away-listener";
import BloodBox from "./BloodBox";
import { FormattedMessage } from "react-intl";

function BloodType({ data, setData }) {
  const [showBox, setShowBox] = useState(false);

  function handleBox() {
    setShowBox((prev) => !prev);
  }
  function handleFilter() {
    setData(
      data.map((blood) => {
        if (blood.checked) {
          return { ...blood, checked: blood.checked === false };
        } else {
          return blood;
        }
      })
    );
  }
  return (
    <ClickAwayListener onClickAway={() => setShowBox(false)}>
      <div>
        <Button
          borderColor="primary"
          border="1px"
          bg="white"
          textColor="primary"
          mx={5}
          onClick={handleBox}
        >
          <FormattedMessage defaultMessage="Blood Type" />
        </Button>
        {showBox && (
          <Box position="absolute" shadow="lg" bg="white" zIndex="10">
            <Box width="36">
              <BloodBox data={data} setData={setData} />
            </Box>
            <Box textAlign="center">
              <Button
                bg="primary"
                textColor="white"
                marginY="3"
                width="20"
                onClick={handleFilter}
              >
                clear
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default BloodType;
