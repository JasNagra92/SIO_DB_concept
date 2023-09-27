"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Drive.module.css";

export default function DriveBCTable() {
  let [driveBCData, setDriveBCData] = useState([]);

  const getDriveBCData = async () => {
    try {
      const response = await axios.get(
        "https://api.open511.gov.bc.ca/events?severity=MAJOR"
      );
      console.log(response.data.events);
      return response.data.events;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array in case of an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDriveBCData();
      // Sort the data by the "lastUpdated" date in descending order
      data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      setDriveBCData(data);
    };
    fetchData();
  }, []);

  const formateDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <table>
      <tr>
        <th>Severity</th>
        <th>Route</th>
        <th>Description</th>
        <th>Last Updated</th>
      </tr>
      {driveBCData &&
        driveBCData.map((event, index) => (
          <tr key={index}>
            <td>{event.severity}</td>
            <td>{event.roads[0].name}</td>
            <td>{event.description}</td>
            <td>{formateDateString(event.updated)}</td>
          </tr>
        ))}
    </table>
  );
}
