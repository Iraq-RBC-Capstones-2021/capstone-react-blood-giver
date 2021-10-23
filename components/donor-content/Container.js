import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DonorsGrid from "./donorsGrid";
import BloodType from "../DropDown/BloodType";
import City from "../DropDown/City";
import bloodTypesStatus from "../../src/data/bloodTypesStatus";

function Container() {
  const donors = useSelector((state) => state.donorsStore.donors);
  const [city, setCity] = useState("All");
  const [data, setData] = useState(bloodTypesStatus);
  const newDonors = donors
    .filter((donor) => {
      if (city === donor.city || city === "All") {
        return donor;
      }
    })
    .filter((donor) => {
      let justBlood = [];
      const truth = data.filter((blood) => {
        if (blood.checked) {
          return justBlood.push(blood.bloodType);
        }
      });
      if (justBlood.includes(donor.bloodType)) {
        return donor;
      }
    });

  return (
    <>
      <Box display="flex" justifyContent="center">
        <City setCity={setCity} />
        <BloodType data={data} setData={setData} />
      </Box>
      <Flex wrap="wrap" gridGap="20px" marginY="5" justifyContent="center">
        <DonorsGrid donors={newDonors} />
      </Flex>
    </>
  );
}

export default Container;
