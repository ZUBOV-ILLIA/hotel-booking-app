import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function UserAuth() {
  return (
    <div className="flex gap-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button size="sm">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size="sm">Register</Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <Link
          href="/profile"
          className="relative flex h-full items-center px-3 hover:animate-pulse"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-50"></div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "md:h-8 md:w-8 h-6 w-6",
              },
            }}
            userProfileUrl="/profile"
          />
          <span className="ml-2 mt-1 self-center text-xl font-thin text-white md:text-3xl">
            Profile
          </span>
        </Link>
      </SignedIn>
    </div>
  );
}

export default UserAuth;
