"use client";
import { useUser } from "@clerk/nextjs";
import ProfileData from "@/components/profile/profileData";
import PageHeader from "@/components/dashboard/PageHeader";
import ProfileForm from "@/components/profile/profileForm";
import { useUserContext } from "@/app/context/UserContext";

export default function ProfilePage() {
  const { user } = useUser();
  const { userDetails } = useUserContext();

  return (
    <main className="px-3 py-5">
      <PageHeader pageHeading={"User Profile"} />
      {userDetails ? (
        <ProfileData details={userDetails} profileImage={user?.imageUrl} />
      ) : (
        <ProfileForm />
      )}
    </main>
  );
}
