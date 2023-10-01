import React from "react";

export default function WildfireTable() {
  const testData = [
    { name: "tatuk Lake", hectares: "30,000", status: "out of control" },
    { name: "beaver Lake", hectares: "30,000", status: "out of control" },
    {
      name: "McDouggal Creek",
      hectares: "30,000",
      status: "being held",
    },
  ];

  // Function to map status values to CSS classes
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "being held":
        return "row-bg-held";
      case "out of control":
        return "row-bg-out-of-control";
      default:
        return ""; // No specific class for other statuses
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Wildfire Name</th>
          <th>Hectares</th>
          <th>Current Status</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((fire, index) => (
          <tr key={index} className={getStatusClass(fire.status)}>
            <td>{fire.name}</td>
            <td>{fire.hectares}</td>
            <td>{fire.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
