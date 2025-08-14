"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";

export default function BookingForm() {
  const [hours, setHours] = useState(new Date().getHours());
  useEffect(() => {
    setHours(new Date().getHours());
  }, []);
  return (
    <div className="w-full  mx-auto bg-white p-6">
      <div className="space-y-5">
        {/* Created By */}
        <div className="space-y-3">
          <Label
            htmlFor="created-by"
            className="text-sm font-medium text-gray-800"
          >
            Created By <span className="text-red-500">*</span>
          </Label>
          <Select className="">
            <SelectTrigger className="w-full rounded-full py-5 shadow-none">
              <SelectValue placeholder="Ex: test@padelmates.se" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="test@padelmates.se">
                  test@padelmates.se
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Start time end time */}
        <div className="flex w-full gap-8">
          {/* Start time */}
          <div className="w-full space-y-2">
            <Label
              htmlFor="created-by"
              className="text-sm font-medium text-gray-800"
            >
              Start Time <span className="text-secondary">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full shadow-none  rounded-full py-5 shadow-0">
                <SelectValue placeholder="Select Start Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                  <SelectItem value="9:00 PM">6:00 PM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* End time */}
          <div className="w-full space-y-2">
            <Label
              htmlFor="created-by"
              className="text-sm font-medium text-gray-800"
            >
              End Time <span className="text-secondary">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full shadow-none  rounded-full py-5 shadow-0">
                <SelectValue placeholder="Select End Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                  <SelectItem value="9:00 PM">6:00 PM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* chose activity */}
        <div className="">
          <div className="w-full space-y-2">
            <Label
              htmlFor="created-by"
              className="text-sm font-medium text-gray-800"
            >
              Chose Activity <span className="text-secondary">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full shadow-none  rounded-full py-5 shadow-0">
                <SelectValue placeholder="Select Activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Chose Activity</SelectLabel>
                  <SelectItem value="Activity 1">Activity 1</SelectItem>
                  <SelectItem value="Activity 2">Activity 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Add Players */}
        <div className="w-full space-y-2 relative">
          <Input
            className="w-full rounded-full  py-5 pr-12 shadow-none"
            placeholder="Add Players"
          />
          {/* Icon/Button on the right */}
          <button
            type="button "
            className="rounded-full cursor-pointer p-1 bg-secondary absolute right-3 top-1/2 -translate-y-1/2 text-primary "
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Recurrent Activity ? */}
        <div className="w-full space-y-2 relative">
          <Input
            className="w-full rounded-full  py-5 pr-12 shadow-none"
            value="Recurrent Activity ?"
          />
          {/* Icon/Button on the right */}
          <Switch className=" absolute right-3 top-1/2 -translate-y-1/2 " />
        </div>

        {/* Chose Multiple Courts */}
        <div className="space-y-4">
          <div className="w-full space-y-2">
            <Label
              htmlFor="created-by"
              className="text-sm font-medium text-gray-800"
            >
              Chose Multiple Courts <span className="text-secondary">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full shadow-none  rounded-full py-5 shadow-0">
                <SelectValue placeholder="Select Court" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Chose Activity</SelectLabel>
                  <SelectItem value="Court 1">Court 1</SelectItem>
                  <SelectItem value="Court 2">Court 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Booking check in */}
          <div className="w-full space-y-2 relative">
            <Input
              className="w-full rounded-full  py-5 pr-12 shadow-none"
              placeholder="Add Players"
            />
            {/* Icon/Button on the right */}
            <Switch className=" absolute right-3 top-1/2 -translate-y-1/2 " />
          </div>
        </div>

        {/* Cancellation Time and Door Code */}
        <div className="flex w-full gap-8 items-center">
          {/* Cancellation time */}
          <div className="w-full space-y-2">
            <Label
              htmlFor="cancellation-time"
              className="text-sm font-medium text-gray-800"
            >
              Cancellation Time (Hours)
              <span className="text-secondary">*</span>
            </Label>

            <div className="flex py-1 items-center justify-between border rounded-full  w-full">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                –
              </Button>

              <span className="text-sm font-medium">2</span>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                +
              </Button>
            </div>
          </div>
          {/* End time */}
          <div className="w-full space-y-2">
            <Label
              htmlFor="created-by"
              className="text-sm font-medium text-gray-800"
            >
              Door Code <span className="text-secondary">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full shadow-none  rounded-full py-5 shadow-0">
                <SelectValue placeholder="Select End Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                  <SelectItem value="9:00 PM">6:00 PM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price and discount */}
        <div className="flex w-full gap-8  items-center">
          <div className="w-full space-y-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Total price <span className="text-green-500">*</span>
              </label>
              <div className="flex items-center border rounded-full overflow-hidden">
                {/* Currency Selector */}
                <Select defaultValue="$">
                  <SelectTrigger className="w-16 border-none focus:ring-0 focus:outline-none">
                    <SelectValue placeholder="$" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$">$</SelectItem>
                    <SelectItem value="€">€</SelectItem>
                    <SelectItem value="£">£</SelectItem>
                  </SelectContent>
                </Select>

                {/* Number Input */}
                <input
                  type="number"
                  defaultValue={0}
                  className="w-full px-3 py-2 outline-none border-l focus:ring-0"
                />
              </div>
            </div>
          </div>
          {/* End Time */}
          <div className="space-y-3 w-full">
            <label className="text-sm font-medium">
              Discount <span className="text-green-500">*</span>
            </label>
            <div className="flex items-center border rounded-full overflow-hidden">
              {/* Discount Selector */}
              <Select defaultValue="%">
                <SelectTrigger className=" border-none focus:ring-0 focus:outline-none">
                  <SelectValue placeholder="%" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="%">%</SelectItem>
                </SelectContent>
              </Select>

              {/* Number Input */}
              <input
                type="number"
                defaultValue={0}
                className="w-full px-3 py-2 outline-none border-l focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* action button */}
        <div className="flex mt-10 justify-between items-center">
          <DrawerClose asChild>
            <Button className="px-12 hover:bg-gray-300 cursor-pointer bg-gray-200/90 text-black py-5 rounded-full">
              Cancel
            </Button>
          </DrawerClose>
          <Button className="px-8 cursor-pointer hover:bg-secondary/50 py-5 rounded-full bg-secondary text-black">
            Book Court
          </Button>
        </div>
      </div>
    </div>
  );
}
