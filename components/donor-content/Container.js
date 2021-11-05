import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DonorsGrid from "./DonorsGrid";
import BloodType from "../DropDown/BloodType";
import City from "../DropDown/City";
import bloodTypesStatus from "../../src/data/bloodTypesStatus";
import { useDispatch } from "react-redux";
import { fetchDonors } from "../../store/donors/donorSlice";

function Container() {
  const dispatch = useDispatch();
  const donors = useSelector((state) => state.donorsStore.donors);
  const [city, setCity] = useState("All");
  const [data, setData] = useState(bloodTypesStatus);
  useEffect(() => {
    dispatch(fetchDonors());
  }, [dispatch]);
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
        <City setCity={setCity} city={city} />
        <BloodType data={data} setData={setData} />
      </Box>
      <Flex wrap="wrap" gridGap="20px" marginY="5" justifyContent="center">
        <DonorsGrid donors={newDonors} />
      </Flex>
    </>
  );
}

export default Container;
