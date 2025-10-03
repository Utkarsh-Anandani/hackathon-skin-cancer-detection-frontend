import AppBar from "@/components/AppBar";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: "radial-gradient(circle at top left, #1E3A8A, #3B82F6)",
      }}
    >
      <AppBar />
      <SignIn />
    </div>
  );
}
