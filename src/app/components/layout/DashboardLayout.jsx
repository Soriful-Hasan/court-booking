"use client";
import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useState } from "react";
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

export default function DashboardLayout({ children }) {
 
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <section className="flex justify-end p-10">
          {/* <DrawerLayout isOpen={isOpen} setIsOpen={setIsOpen}></DrawerLayout> */}
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button>Create Activity</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </section>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
