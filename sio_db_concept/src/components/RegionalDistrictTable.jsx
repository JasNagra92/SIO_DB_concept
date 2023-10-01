import React from "react";
import styles from "../styles/Region.module.css";

export default function RegionalDistrictTable() {
  const testData = [
    {
      name: "Northern Rockies Regional District",
      Date: "Sept 25 2023",
      URL: "https://www.northernrockies.ca/",
    },
    {
      name: "Squamish Lillooet District",
      Date: "Sept 23 2023",
      URL: "https://www.slrd.bc.ca/",
    },
  ];

  return (
    <table>
      <tbody>
        <tr>
          <th>Regional District</th>
          <th>Most Recent Update</th>
          <th>URL</th>
        </tr>
        {testData.map((region, index) => (
          <tr className={styles.regionrow} key={index}>
            <td>{region.name}</td>
            <td>{region.Date}</td>
            <td>
              <a href={region.URL}>Link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
