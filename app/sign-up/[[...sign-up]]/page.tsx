import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <SignUp />
    </div>
  );
}
