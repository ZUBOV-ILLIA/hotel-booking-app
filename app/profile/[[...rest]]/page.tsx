import React, { Suspense } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import "./profile.css";
import UserInfo from "@/components/profile/UserInfo";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h2 className="self-center text-4xl">Profile page</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <SignedIn>
          <div className="acc-settings-btn my-4 flex items-center self-end">
            <UserButton />
            <span>Account Settings</span>
          </div>
        </SignedIn>
      </Suspense>

      <UserInfo />
    </div>
  );
}
