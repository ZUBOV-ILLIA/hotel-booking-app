import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
