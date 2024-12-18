import { NextResponse } from "next/server";

type Params = {
  team: string;
};

export async function GET(request: Request, context: { params: Params }) {
  console.log(">>>>>", context);

  return NextResponse.json({ team: 1234 });
}
