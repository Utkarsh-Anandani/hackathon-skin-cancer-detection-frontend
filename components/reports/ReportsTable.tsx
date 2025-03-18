"use client";

import { useUserContext } from "@/app/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PageLoader from "../PageLoader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export interface Ireport {
  _id: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  type: string;
  age: number;
  image: string;
  part: string;
  description: string;
  result: string;
  accuracy: string;
  createdAt: string;
  updatedAt: string;
}

export default function ReportsTable() {
  const [reports, setReports] = useState<Array<Ireport> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userDetails } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!userDetails?.phoneNumber) return;
    const getReports = async () => {
      setIsLoading(true);
      try {
        const phoneNumber = userDetails?.phoneNumber;
        if (!phoneNumber) {
          toast("Please complete your profile");
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/api/report?phone=${phoneNumber}`
        );
        if (response.data.success) {
          setReports(response.data.data);
          toast("Reports Fetched Successfully");
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };
    getReports();

    return () => setReports(null);
  }, [userDetails]);

  if (isLoading) {
    return (
      <div className="w-[70vw] h-[80vh] flex items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="w-full mt-14 px-5 overflow-x-auto">
      <Table className="text-sm md:text-base">
        <TableCaption>A list of your previous diagnosis reports</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm md:text-base">Report ID</TableHead>
            <TableHead className="text-sm md:text-base">Patients Name</TableHead>
            <TableHead className="text-sm md:text-base">Report Type</TableHead>
            <TableHead className="text-sm md:text-base">Reporting Date</TableHead>
            <TableHead className="text-sm md:text-base">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports &&
            reports.map((report) => {
              return (
                <TableRow key={report?._id}>
                  <TableCell className="font-medium text-sm md:text-base">{report?._id}</TableCell>
                  <TableCell className="text-sm md:text-base">{report?.fullName}</TableCell>
                  <TableCell className="text-sm md:text-base">
                    {report?.type === "SC"
                      ? "Skin Cancer Detection"
                      : "Pneumonia Detection"}
                  </TableCell>
                  <TableCell className="text-sm md:text-base">
                    {new Date(report?.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm md:text-base">
                    <Button className="p-2 md:p-3 text-sm md:text-base"
                      onClick={() =>
                        router.push(`/dashboard/reports/${report?._id}`)
                      }
                    >
                      View Report
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
