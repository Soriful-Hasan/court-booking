import React from "react";

export default function Sidebar() {
  return (
    <div className="border bg-[#0000001A] w-2/20 h-screen">
      <div className="flex flex-col justify-between pt-15 pb-15 items-center  h-screen ">
        <div className="">
          <h1 className="border border-red-600">Logo</h1>
        </div>
        <div className="">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
