import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import BloodBox from "./BloodBox";
import ClickAwayListener from "react-click-away-listener";
function BloodType() {
  const [showBox, setShowBox] = useState(false);
  const [data, setData] = useState([
    { checked: true, bloodType: "AB-" },
    { checked: true, bloodType: "AB+" },
    { checked: true, bloodType: "A" },
  ]);
  function handleBox() {
    setShowBox((prev) => !prev);
  }
  function handleFilter() {
    const sendNewFilterToRedux = data;
  }
  return (
    <ClickAwayListener onClickAway={() => setShowBox(false)}>
      <div>
        <Button
          borderColor="primary"
          border="1px"
          bg="white"
          textColor="primary"
          marginLeft="3"
          onClick={handleBox}
        >
          Blood Type
        </Button>
        {showBox && (
          <Box position="absolute" shadow="md" bg="white" zIndex="10">
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
                Filter
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default BloodType;
