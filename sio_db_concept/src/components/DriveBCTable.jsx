import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Drive.module.css";
import { Table } from "antd";

export default function DriveBCTable() {
  let [driveBCData, setDriveBCData] = useState([]);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Severity",
      dataIndex: "Severity",
      key: "Severity",
    },
    {
      title: "Route",
      dataIndex: "Route",
      key: "Route",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Last Updated",
      dataIndex: "Last Updated",
      key: "Last Updated",
    },
  ];

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
      let data = await getDriveBCData();
      // Sort the data by the "lastUpdated" date in descending order
      data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      // Format the date string
      data.forEach((item) => {
        item.updated = formateDateString(item.updated);
      });
      // extract only neccessary properties for the table
      data = data.map((item) => {
        return {
          Severity: item.severity,
          Route: item.roads[0].name,
          Description: item.description,
          "Last Updated": item.updated,
        };
      });
      setDriveBCData(data);
    };
    fetchData();
  }, []);

  const formateDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div>
      <Table
        dataSource={driveBCData}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
