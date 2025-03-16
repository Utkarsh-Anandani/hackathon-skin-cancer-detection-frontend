"use client";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from "../ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function ProfileForm() {
  const [fullName, setfullName] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [DOB, setDOB] = useState("");
  const { user } = useUser();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/profile`,
        {
          fullName,
          gender,
          country,
          city,
          dob: DOB,
          phoneNumber: user?.phoneNumbers[0].phoneNumber.substring(3),
          countryCode: user?.phoneNumbers[0].phoneNumber.substring(0, 3),
        }
      );

      if (response.data.success) {
        toast(response.data.message);
        window.location.reload();
      } else {
        toast(response.data.message, {
          description: "Please try again...",
        });
      }
    } catch (error: any) {
      toast(error.message, {
        description: "Please try again...",
      });
    }
  };

  return (
    <main className="w-full h-auto my-10 mx-3">
      <div className="w-[50vw] mx-auto">
        <Alert className="bg-blue-50 border-blue-200 border-2">
          <Info />
          <AlertTitle>Complete Your Profile!</AlertTitle>
          <AlertDescription>
            Complete you profile now, for being able to use our tests and
            services.
          </AlertDescription>
        </Alert>
        <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              value={fullName}
              onChange={(e) => {
                setfullName(e.target.value);
              }}
              type="text"
              id="name"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              value={DOB}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
              className="w-fit"
              type="date"
              id="dob"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Gender</Label>
            <Select
              value={gender}
              onValueChange={(value) => {
                setgender(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select your Gender" />
              </SelectTrigger>
              <SelectContent className="z-[20] bg-white">
                <SelectGroup>
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                  <SelectItem value="O">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="country">Country</Label>
            <Input
              value={country}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
              type="text"
              id="country"
              placeholder="United Kingdom"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="city">City</Label>
            <Input
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              type="text"
              id="city"
              placeholder="London"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
}
