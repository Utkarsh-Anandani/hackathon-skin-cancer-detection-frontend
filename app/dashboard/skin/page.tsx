"use client";
import { useUserContext } from "@/app/context/UserContext";
import PageHeader from "@/components/dashboard/PageHeader";
import SmallLoader from "@/components/SmallLoader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function SCDPage() {
  const [file, setFile] = useState<File | null>(null);
  const [part, setPart] = useState("");
  const [description, setDescription] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { userDetails } = useUserContext();
  const router = useRouter();

  const handleImageChange = (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      setFilePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!userDetails) {
      toast("Please complete your profile and try again");
      router.push("/dashboard/profile");
      setIsLoading(false);
      return;
    }
    if (!file) {
      toast("File is Required");
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("part", part);
    formData.append("description", description);
    formData.append("phoneNumber", userDetails?.phoneNumber);

    try {
      const report = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/predict/skin`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (report.status === 200) {
        toast(report.data.message);
        setIsLoading(false);
        setTimeout(() => {
          router.push(`/dashboard/reports/${report.data.data._id}`);
        }, 3000);
      } else {
        setIsLoading(false);
        toast(report.data.message);
      }
    } catch (error: any) {
      toast(error.message);
      setIsLoading(false);
    }
  };
  return (
    <main className="w-screen md:w-[70vw] px-3 py-5">
      <PageHeader pageHeading={"Skin Cancer Detection Test"} />
      <Alert className="bg-blue-50 border-blue-200 border-2 mt-7">
        <Info />
        <AlertTitle className="text-sm md:text-base">
          Don't consider the test report as final
        </AlertTitle>
        <AlertDescription className="text-sm md:text-base">
          This is an AI test, the result depends on picture quality, demographic
          factors, lighting etc. Doctor's consultation after the test is
          necessary.
        </AlertDescription>
      </Alert>
      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-24 mt-5 py-5 px-5">
        <form className="md:w-4/6 flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="file">Upload a clear image of leison</Label>
            <Input
              onChange={handleImageChange}
              id="file"
              type="file"
              required
            />
          </div>
          {filePreview && (
            <div className="flex flex-row gap-7 items-center">
              <p className="font-semibold text-sm">Selected Image Preview : </p>
              <img
                className="w-[100px] rounded-md shadow-md"
                src={filePreview}
                alt="selected file"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label htmlFor="part">Location of the leison</Label>
            <Input
              value={part}
              onChange={(e) => setPart(e.target.value)}
              id="part"
              type="text"
              placeholder="on upper part of torso"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="desc">
              Describe the leison and any other details
            </Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="desc"
              placeholder="a blackish patch, smaller than a coin, a little bumped and reddish on borders"
              required
            />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={
                    userDetails || isLoading
                      ? "cursor-pointer bg-blue-500"
                      : "cursor-not-allowed opacity-50 bg-blue-500"
                  }
                  type="submit"
                >
                  {isLoading ? <SmallLoader /> : "Generate Report"}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start">
                {userDetails
                  ? "Submit Details"
                  : "Complete your profile to access services"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </form>
        <div className="md:w-2/6 flex md:flex-col gap-5">
          <Label
            className="text-center text-base md:text-lg font-bold w-full"
            htmlFor="eg"
          >
            Example Leison image
          </Label>
          <img id="eg" className="w-50 md:w-100" src="/leison.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}
