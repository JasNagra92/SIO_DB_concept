"use client";

import React, { useState } from "react";
import WildfireTable from "./WildfireTable";
import RegionalDistrictTable from "./RegionalDistrictTable";
import DriveBCTable from "./DriveBCTable";
import styles from "../styles/Dashboard.module.css";

export default function DashboardPage() {
  const [tableData, setTableData] = useState(/* Initial table data */);

  const refreshTable = () => {
    console.log("Refreshing table");
    // Update table data here using setTableData
  };

  return (
    <div className={styles.main}>
      <WildfireTable data={tableData} />
      <RegionalDistrictTable data={tableData} />
      <DriveBCTable data={tableData} />
    </div>
  );
}
