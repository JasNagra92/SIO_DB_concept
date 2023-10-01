import React from "react";
import WildfireTable from "./WildfireTable";
import RegionalDistrictTable from "./RegionalDistrictTable";
import DriveBCTable from "./DriveBCTable";
import styles from "../styles/Dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.main}>
      <WildfireTable />
      <RegionalDistrictTable />
      <DriveBCTable />
    </div>
  );
}
