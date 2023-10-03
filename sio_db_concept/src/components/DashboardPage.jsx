import React from "react";
import WildfireTable from "./WildfireTable";
import RegionalDistrictTable from "./RegionalDistrictTable";
import DriveBCTable from "./DriveBCTable";

export default function DashboardPage({ displayedTables }) {
  return (
    <div className="bg-neutral-100 flex flex-col space-y-8 p-8">
      <div className="text-right">
        <button className="border rounded-md bg-green-300 p-1 text-black drop-shadow-lg">
          Refresh Data
        </button>
      </div>
      {displayedTables.includes("BCWS") ? <WildfireTable /> : null}
      {displayedTables.includes("Regional") ? <RegionalDistrictTable /> : null}
      {displayedTables.includes("DriveBC") ? <DriveBCTable /> : null}
    </div>
  );
}
