import { SignOutButton } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LogOutIcon } from "lucide-react";

export default function ProfileData(props: any) {
  return (
    <main className="w-full h-auto">
      <div className="w-[60vw] mx-auto px-5 py-10 flex flex-col gap-8">
        <div className="flex flex-row gap-5">
          <img
            width={90}
            height={90}
            className="rounded-md"
            src={props.profileImage}
            alt="user profile image"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              {props.details?.fullName}
            </span>
            <span className="text-slate-500 text-sm">
              {props.details?.countryCode} {props.details?.phoneNumber}
            </span>
            <SignOutButton>
              <div className="bg-slate-500 text-white text-center rounded-md flex flex-row items-center justify-center gap-2 mt-3 px-2 py-1 text-xs">
                <span>Sign Out</span>
                <LogOutIcon className="w-4" />
              </div>
            </SignOutButton>
          </div>
        </div>
        <Card className="gap-3">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 space-y-3">
              <div>
                <div className="text-sm font-semibold">Full Name</div>
                <div className="text-sm">{props.details?.fullName}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Gender</div>
                <div className="text-sm">
                  {props.details?.gender === "M"
                    ? "Male"
                    : props.details?.gender === "F"
                    ? "Female"
                    : "Other"}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">Date of Birth</div>
                <div className="text-sm">
                  {new Date(props.details?.dob).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gap-3">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 space-y-3">
              <div>
                <div className="text-sm font-semibold">Phone Number</div>
                <div className="text-sm">
                  {props.details?.countryCode} {props.details?.phoneNumber}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">Country</div>
                <div className="text-sm">{props.details?.country}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">City</div>
                <div className="text-sm">{props.details?.city}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
