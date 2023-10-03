import React from "react";

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
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center pb-3">
        <h1 className="text-lg bg-indigo-400 rounded-md p-2 text-white drop-shadow-lg">
          Regional Districts
        </h1>
      </div>
      <table
        className="table-fixed 
       bg-white border-collapse border border-slate-400 drop-shadow-lg rounded-md overflow-hidden"
      >
        <tbody>
          <tr>
            <th className="border border-slate-300">Regional District</th>
            <th className="border border-slate-300">Most Recent Update</th>
            <th className="border border-slate-300">URL</th>
          </tr>
          {testData.map((region, index) => (
            <tr key={index}>
              <td className="border border-slate-300 text-center">
                {region.name}
              </td>
              <td className="border border-slate-300 text-center">
                {region.Date}
              </td>
              <td className="border border-slate-300 text-center">
                <a href={region.URL}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
