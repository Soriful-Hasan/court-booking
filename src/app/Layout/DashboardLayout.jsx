"use client";
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
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
import BookingForm from "./BookingForm";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <section className="flex justify-end p-10">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button className="rounded-full cursor-pointer">
                Create Activity
              </Button>
            </DrawerTrigger>
            <DrawerContent
              className="
          data-[vaul-drawer-direction=right]:inset-y-0 
          data-[vaul-drawer-direction=right]:right-0 
          data-[vaul-drawer-direction=right]:h-full 
          data-[vaul-drawer-direction=right]:w-full
          sm:data-[vaul-drawer-direction=right]:w-3/4 
          md:data-[vaul-drawer-direction=right]:w-1/2 
          lg:data-[vaul-drawer-direction=right]:w-[400px] 
          xl:data-[vaul-drawer-direction=right]:w-[500px] 
          data-[vaul-drawer-direction=right]:border-l
        "
            >
              <DrawerHeader className="!flex !flex-row !items-start !justify-between">
                <div className="flex items-end gap-2 ">
                  <DrawerTitle className="text-primary text-xl font-bold">
                    Book Court,
                  </DrawerTitle>
                  <DrawerDescription className="text-primary">
                    Wed Jul 30, 2025
                  </DrawerDescription>
                </div>

                <DrawerClose>
                  <span className="bg-secondary/10 w-8 h-8 flex items-center justify-center rounded-full text-primary font-extrabold cursor-pointer">
                    ✕
                  </span>
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
