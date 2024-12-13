import { currentUser } from "@clerk/nextjs/server";

export default async function UserInfo() {
  const user = await currentUser();
  // console.log(user);

  return (
    <div className="flex flex-col items-center">
      <div>
        User ID <b>{user?.id}</b>
      </div>
      <div>
        Email <b>{user?.emailAddresses[0].emailAddress}</b>
      </div>
    </div>
  );
}
