"use client";
import PageHeader from "@/components/dashboard/PageHeader";
import PageLoader from "@/components/PageLoader";
import { Ireport } from "@/components/reports/ReportsTable";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import conditions from "@/lib/conditionInfo.json";

export default function ReportById() {
  const [report, setReport] = useState<Ireport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [conditionDetails, setConditionDetails] = useState<any>(null);
  const path = usePathname();
  const id = path.split("/reports/")[1];
  const { user } = useUser();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    const getReport = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/api/report/${id}`
        );
        if (response.data.success) {
          toast(response.data.message);
          setReport(response.data.data);
          const result = response.data.data.result;
          // @ts-ignore
          const matchedCondition = conditions[result];
          if (matchedCondition) {
            setConditionDetails(matchedCondition);
          } else {
            setConditionDetails(null);
          }
          setIsLoading(false);
        } else {
          toast(response.data.message);
          setIsLoading(false);
        }
      } catch (error: any) {
        toast(error.message);
        setIsLoading(false);
      }
    };
    getReport();
    return () => setReport(null);
  }, [id]);

  return (
    <main className="w-screen h-screen md:w-[80vw] md:h-auto px-3 py-5">
      <PageHeader pageHeading={`Detailed Report`} />
      {isLoading && (
        <div className="w-[80vw] h-[80vh] flex items-center justify-center">
          <PageLoader />
        </div>
      )}
      {!isLoading && report ? (
        <div className="md:max-w-4xl mx-auto p-2 md:p-4">
          <Card className="shadow-lg rounded-2xl border border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-xl md:text-3xl font-bold">
                Skin Cancer Diagnosis Report
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 md:px-6 space-y-4">
              <div className="flex flex-row items-start md:items-center gap-4">
                <img
                  className="h-[100px] md:h-[120px] rounded-lg border border-gray-300 object-cover"
                  src={user?.imageUrl}
                  alt=""
                />
                <div className="space-y-1">
                  <p className="text-sm md:text-base">
                    <strong>Full Name:</strong> {report.fullName}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Phone Number:</strong> {report.phoneNumber}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Age:</strong> {report.age || "N/A"}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Gender:</strong> {report.gender}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row gap-5 py-3">
                <div className="space-y-1 md:w-5/7">
                  <p className="text-sm md:text-base">
                    <strong>Part:</strong> {report.part}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Description:</strong> {report.description}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Result:</strong> {report.result}
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Accuracy:</strong>
                    <Badge className="ml-2 text-white bg-green-500">
                      {Math.round(parseFloat(report.accuracy) * 100)}%
                    </Badge>
                  </p>
                  <p className="text-sm text-gray-500">
                    Created At: {new Date(report.createdAt).toLocaleString()}
                  </p>
                </div>
                <img
                  className="w-[100px] md:h-auto rounded-lg border border-gray-300 object-cover md:w-2/7"
                  src={report.image}
                  alt=""
                />
              </div>

              <Separator />

              {conditionDetails && (
                <div className="pt-4">
                  <h3 className="text-base md:text-xl font-semibold">Condition Details</h3>
                  <p className="text-gray-700 text-sm md:text-base mt-2">
                    {conditionDetails.description}
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    <strong>Potential Causes:</strong>
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 text-sm md:text-base">
                    {conditionDetails.potential_causes.map(
                      (cause: any, index: any) => (
                        <li key={index}>{cause}</li>
                      )
                    )}
                  </ul>
                  <p className="mt-2 text-sm md:text-base">
                    <strong>Precautions:</strong>
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 text-sm md:text-base">
                    {conditionDetails.precautions.map(
                      (precaution: any, index: any) => (
                        <li key={index}>{precaution}</li>
                      )
                    )}
                  </ul>
                  <p className="mt-2 font-bold text-sm md:text-base">
                    Danger Scale: {conditionDetails.danger_scale}/5
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        "No Data Available"
      )}
    </main>
  );
}
