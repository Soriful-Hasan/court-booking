import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <section className=" flex justify-end p-10">
          <h1>Create Activity</h1>
        </section>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
