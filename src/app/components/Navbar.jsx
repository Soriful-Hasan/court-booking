import { User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-36 border">
      <div className="flex justify-between h-full items-center mr-10 ml-10 ">
        <div className="">
          <h1 className="font-bold text-primary text-xl">Booking</h1>
        </div>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#10715a"
            stroke="#10715a"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide  lucide-bell-icon lucide-bell"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>

          <div className="flex gap-4 border px-6 py-2 rounded-xl">
            <div className=" border-2 border-secondary rounded-full p-2 ">
              <User color="#6E737A" />
            </div>
            <div className="">
              <h5>User Name</h5>
              <p className="text-primary font-semibold">User Role</p>
            </div>
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
