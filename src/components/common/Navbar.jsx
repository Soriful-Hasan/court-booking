import { Bell, ChevronsUpDown, User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="mt-10">
      <div className="flex justify-between h-full  ">
        {/* Booking Heading */}
        <div className="flex items-center ml-10">
          <h1 className="font-bold text-primary text-xl">Bookings</h1>
        </div>
        {/* User role and notification  */}
        <div className="flex items-center gap-4 mr-10">
          <div className="">
            <Bell size={40} className="text-primary fill-primary" />
          </div>
          <div className="flex gap-4 border px-5 py-1 rounded-xl">
            <div className="flex items-center ">
              <div className="border-2  p-2 rounded-full">
                <User color="#6E737A" size={20} />
              </div>
            </div>
            <div className="">
              <h5 className="font-semibold">User Name</h5>
              <p className="text-primary text-sm">User Role</p>
            </div>
            <div className="flex  items-center">
              <ChevronsUpDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
