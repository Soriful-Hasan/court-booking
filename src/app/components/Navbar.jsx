import { ChevronsUpDown, User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-36 border">
      <div className="flex justify-between h-full items-center mr-10 ml-10 ">
        <div className="">
          <h1 className="font-bold text-primary text-xl">Booking</h1>
        </div>
        <div className="flex items-center gap-4">

          <div className="flex gap-4 border px-6 py-2 rounded-xl">
            <div className=" border-2 border-secondary rounded-full p-2 ">
              <User color="#6E737A" />
            </div>
            <div className="">
              <h5>User Name</h5>
              <p className="text-primary font-semibold">User Role</p>
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
