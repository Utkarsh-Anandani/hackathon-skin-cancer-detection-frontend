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
    <div className="mt-14 px-5">
      <Table>
        <TableCaption>A list of your previous diagnosis reports</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Report ID</TableHead>
            <TableHead>Patients Name</TableHead>
            <TableHead>Report Type</TableHead>
            <TableHead>Reporting Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports &&
            reports.map((report) => {
              return (
                <TableRow key={report?._id}>
                  <TableCell className="font-medium">{report?._id}</TableCell>
                  <TableCell>{report?.fullName}</TableCell>
                  <TableCell>
                    {report?.type === "SC"
                      ? "Skin Cancer Detection"
                      : "Pneumonia Detection"}
                  </TableCell>
                  <TableCell>
                    {new Date(report?.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button
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
