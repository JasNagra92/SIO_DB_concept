import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

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
      <div className="flex justify-center pb-3">
        <h1 className="text-lg bg-indigo-400 rounded-md p-2 text-white drop-shadow-lg">
          Drive BC Events
        </h1>
      </div>
      <table
        className="table-auto w-full
       bg-white border-collapse border border-slate-400 drop-shadow-lg rounded-md overflow-hidden"
      >
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Severity</th>
            <th className="border border-slate-300">Route</th>
            <th className="border border-slate-300">Description</th>
            <th className="border border-slate-300 p-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {driveBCData.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 text-center p-2">
                {item.Severity}
              </td>
              <td className="border border-slate-300 text-center p-2">
                {item.Route}
              </td>
              <td className="border border-slate-300 text-center p-2">
                {item.Description}
              </td>
              <td className="border border-slate-300 text-center p-2">
                {item["Last Updated"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
