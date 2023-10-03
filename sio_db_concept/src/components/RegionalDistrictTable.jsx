import React from "react";

export default function RegionalDistrictTable() {
  const testData = [
    {
      name: "Cariboo Regional District",
      date: "September 28, 2023 03:50 PM",
      URL: "https://www.cariboord.ca/Modules/news/en?CategoryNames=Emergency+Alerts+and+Orders&TagWhiteList=",
    },
    {
      name: "Squamish-Lillooet Regional District",
      date: "Sep 10, 2023 - 3:02pm",
      URL: "https://www.slrd.bc.ca/emergency-program/emergency-alerts-orders",
    },
    {
      name: "Northern Rockies Regional Municipality",
      date: "October 03, 2023 08:00 AM",
      URL: "https://www.northernrockies.ca/Modules/News/en?CategoryNames=Advisories+and+Public+Notices&datepicker-month-select=8&datepicker-year-select=2023&datepicker-month-select=8&datepicker-year-select=2023&TagWhiteList=",
    },
    {
      name: "Glen Lake Emergency",
      date: "Thursday, September 28, 2023 - 10:46",
      URL: "https://www.cordemergency.ca/emergencies/glen-lake-wildfire-2023",
    },
    {
      name: "McDougall Creek Emergency",
      date: "Thursday, September 28, 2023 - 15:30",
      URL: "https://www.cordemergency.ca/emergencies/mcdougall-creek-wildfire-2023",
    },
    {
      name: "Sunshine Coast Regional District",
      date: "September 27, 2023",
      URL: "https://www.scrd.ca/news/?_news_types=news-release",
    },
    {
      name: "Okanagan-Similkameen Regional District",
      date: "September 25, 2023, 3:00 pm",
      URL: "https://www.rdos.bc.ca/newsandevents/rdos-news/hot-topics/",
    },
    {
      name: "Thompson-Nicola Regional District",
      date: "Mon Sep 25, 2023, 16:09",
      URL: "https://www.tnrd.ca/services/emergency-services/evacuation-orders-alerts/",
    },
    {
      name: "Peace River Regional District Orders",
      date: "September 24, 2023",
      URL: "https://prrd.bc.ca/category/emergency-evacuations/",
    },
    {
      name: "Peace River Regional District Alerts",
      date: "October 1, 2022",
      URL: "https://prrd.bc.ca/category/emergency-alerts/",
    },
  ];

  const sortedTestData = testData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

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
            <th className="border border-slate-300 p-2">Most Recent Update</th>
            <th className="border border-slate-300">URL</th>
          </tr>
          {sortedTestData.map((region, index) => (
            <tr key={index}>
              <td className="border border-slate-300 text-center">
                {region.name}
              </td>
              <td className="border border-slate-300 text-center">
                {region.date}
              </td>
              <td className="border border-slate-300 p-2 text-center">
                <a href={region.URL}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
