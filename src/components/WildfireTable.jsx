import React from "react";

export default function WildfireTable() {
  const testData = [
    {
      name: "Tatuk Lake",
      hectares: "44,641",
      status: "Out of control",
      LChange: "Sept 26, 2023",
    },
    {
      name: "Great Beaver Lake",
      hectares: "48,396",
      status: "Out of control",
      LChange: "Sept 23, 2023",
    },
    {
      name: "Lucas Lake",
      hectares: "34,853",
      status: "Out of control",
      LChange: "Sept 29, 2023",
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
    <div>
      <div className="flex justify-center pb-3">
        <h1 className="text-lg bg-indigo-400 rounded-md p-2 text-white drop-shadow-lg">
          BCWS Wildfires
        </h1>
      </div>
      <table className="table-auto w-full bg-white border-collapse border border-slate-400 drop-shadow-lg rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Wildfire Name</th>
            <th className="border border-slate-300">Hectares</th>
            <th className="border border-slate-300">Current Status</th>
            <th className="border border-slate-300">Last Changed</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((fire, index) => (
            <tr key={index}>
              <td className="border border-slate-300 text-center">
                {fire.name}
              </td>
              <td className="border border-slate-300 text-center">
                {fire.hectares}
              </td>
              <td className="border border-slate-300 text-center">
                {fire.status}
              </td>
              <td className="border border-slate-300 text-center">
                {fire.LChange}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-2">
        <button className="border rounded-md bg-green-300 p-1 text-black drop-shadow-lg">
          Add Fire
        </button>
      </div>
    </div>
  );
}
