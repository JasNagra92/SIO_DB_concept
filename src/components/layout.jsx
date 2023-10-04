import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children, toggleTable, displayedTables }) {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar toggleTable={toggleTable} displayedTables={displayedTables} />
        <main className="grow">{children}</main>
      </div>
    </div>
  );
}
