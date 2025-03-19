import AppIcon from "@/components/AppIcon";
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
          <AppIcon dim={8} />
          <h1 className="text-lg md:text-2xl font-bold">Medxo</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a
                href="/dashboard/profile"
                className="hover:text-blue-500 transition"
              >
                Dashboard
              </a>
            </li>
            <SignedOut>
              <div className="hover:text-blue-500 transition">
                <SignInButton />
              </div>
              <div className="hover:text-blue-500 transition">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton
                userProfileMode="navigation"
                userProfileUrl="/dashboard/profile"
              />
            </SignedIn>
          </ul>
        </nav>
      </div>
    </header>
  );
}
