"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={"/"}>
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-lg p-1.5">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Medxo</span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              How It Works
            </a>
            <SignedOut>
              <SignInButton>
                <a
                  href="/sign-in"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Get Started
                </a>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                userProfileMode="navigation"
                userProfileUrl="/dashboard/profile"
              />
            </SignedIn>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-slate-600 hover:text-slate-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-slate-600 hover:text-slate-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <SignedOut>
                <SignInButton>
                  <a
                    href="/sign-in"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-row items-center gap-[12px]">
                  <UserButton
                    userProfileMode="navigation"
                    userProfileUrl="/dashboard/profile"
                  />
                  <div className="text-[14px] font-medium text-neutral-600">
                    {user?.phoneNumbers[0].phoneNumber}
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
