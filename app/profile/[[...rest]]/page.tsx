import React, { Suspense } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import "./profile.css";
import UserInfo from "@/components/profile/UserInfo";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col overflow-hidden px-5">
      <h2 className="animate-slideInFromTop mb-6 text-4xl font-thin">
        Profile
      </h2>

      <Suspense fallback={<div>Loading...</div>}>
        <SignedIn>
          <div className="acc-settings-btn animate-slideInFromRight my-4 mr-4 flex items-center md:self-end">
            <UserButton />
            <span>Account Settings</span>
          </div>
        </SignedIn>
      </Suspense>

      {/*<UserInfo />*/}
    </div>
  );
}
