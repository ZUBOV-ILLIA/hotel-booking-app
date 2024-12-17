import React, { Suspense } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import "./profile.css";
import UserInfo from "@/components/profile/UserInfo";

export default function Profile() {
  return (
    <div className="container mx-auto flex flex-col overflow-hidden px-5">
      <h2 className="mb-4 animate-slideInFromTop text-4xl font-thin">
        Profile
      </h2>

      <Suspense fallback={<div>Loading...</div>}>
        <SignedIn>
          <div className="acc-settings-btn my-4 flex animate-slideInFromRight items-center self-start rounded bg-gray-600 bg-opacity-90 hover:bg-gray-500 md:self-end">
            <UserButton />
            <span className="pr-4">Account Settings</span>
          </div>

          <h3 className="mb-6 animate-slideInFromTop text-3xl">
            Your Reservations:
          </h3>
        </SignedIn>
      </Suspense>

      {/*<UserInfo />*/}
    </div>
  );
}
