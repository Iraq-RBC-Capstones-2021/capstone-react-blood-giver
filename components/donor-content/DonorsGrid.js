import DonorCard from "../doner-card";
function DonorsGrid({ donors }) {
  return (
    <>
      {donors.map((donor) => (
        <DonorCard key={donor.id} {...donor} />
      ))}
    </>
  );
}

export default DonorsGrid;
