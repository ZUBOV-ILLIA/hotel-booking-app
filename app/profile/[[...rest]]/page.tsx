import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import "./profile.css";

export default function Page() {
  return (
    <div>
      <h2 className="text-4xl">Profile page</h2>

      <SignedIn>
        <div className="acc-settings-btn flex items-center">
          <UserButton />
          <span>Account Settings</span>
        </div>
      </SignedIn>
    </div>
  );
}
