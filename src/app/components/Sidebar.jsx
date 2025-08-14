import { Button } from "@/components/ui/button";
import { CalendarDays, LogOut } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <div className=" bg-[#0000001A] w-2/20 h-screen flex flex-col justify-between">
      {/* logo and booking button  */}
      <div className="mt-15 space-y-6">
        <div className="flex justify-center">
          <div className="relative bg-primary  p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CalendarDays className="text-white" size={32} />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>
        <div className="w-full p-4">
          <Button className="flex cursor-pointer justify-start rounded-md w-full">
            <CalendarDays />
            Bookings
          </Button>
        </div>
      </div>

      {/* log out button */}
      <div className="border w-full p-4">
        <Button className="bg-red-600 cursor-pointer flex justify-start rounded-md w-full">
          <LogOut />
          Log Out
        </Button>
      </div>
    </div>
  );
}
