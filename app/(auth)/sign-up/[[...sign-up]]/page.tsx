import AppBar from "@/components/AppBar";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: "radial-gradient(circle at top left, #1E3A8A, #3B82F6)",
      }}
    >
      <AppBar />
      <SignUp />
    </div>
  );
}
