import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <SignUp fallbackRedirectUrl="/profile" />
    </div>
  );
}
