import AppIcon from "@/components/AppIcon";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function AppBar() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AppIcon />
          <h1 className="text-2xl font-bold">RuralMed</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="hover:text-blue-500 transition">
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-blue-500 transition"
              >
                How It Works
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-blue-500 transition">
                Dashboard
              </a>
            </li>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ul>
        </nav>
      </div>
    </header>
  );
}
