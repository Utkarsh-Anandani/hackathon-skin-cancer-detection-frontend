"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileData from "@/components/profile/profileData";
import PageHeader from "@/components/dashboard/PageHeader";
import ProfileForm from "@/components/profile/profileForm";

export default function ProfilePage() {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    const getUserDetails = async () => {
      try {
        const phoneNumber = user.phoneNumbers?.[0]?.phoneNumber;
        if (!phoneNumber) throw new Error("Phone number not available");

        const formattedPhone = phoneNumber.substring(3);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/api/profile?phone=${formattedPhone}`
        );
        if (response.data.success) {
          setUserDetails(response.data.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to fetch user details.");
      }
    };

    getUserDetails();
    return () => setUserDetails(null);
  }, [user]);

  return (
    <main className="px-3 py-5">
      <PageHeader pageHeading={"User Profile"} />
      {loading ? (
        "Loading....."
      ) : userDetails ? (
        <ProfileData details={userDetails} profileImage={user?.imageUrl} />
      ) : (
        <ProfileForm />
      )}
    </main>
  );
}
