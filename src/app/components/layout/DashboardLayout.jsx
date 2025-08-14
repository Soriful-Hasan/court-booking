"use client";
import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BookingForm from "../BookingForm";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <section className="flex justify-end p-10">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button className='rounded-full cursor-pointer'>Create Activity</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="!flex !flex-row !items-start !justify-between">
                <div className="flex flex-col">
                  <DrawerTitle className="text-primary text-xl font-bold">
                    Book Court,
                  </DrawerTitle>
                  <DrawerDescription className="text-primary">
                    Wed Jul 30, 2025
                  </DrawerDescription>
                </div>
                <DrawerClose>
                  {/* <Button
                    className="bg-secondary/10 text-primary font-extrabold cursor-pointer"
                    variant="ghost"
                    size="icon"
                  >
                    ✕
                  </Button> */}
                </DrawerClose>
              </DrawerHeader>
              <div className="">
                <BookingForm />
              </div>
            </DrawerContent>
          </Drawer>
        </section>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
