import React from "react";
import WildfireTable from "./WildfireTable";
import RegionalDistrictTable from "./RegionalDistrictTable";
import DriveBCTable from "./DriveBCTable";

export default function DashboardPage() {
  return (
    <div>
      <WildfireTable />
      <RegionalDistrictTable />
      <DriveBCTable />
    </div>
  );
}
