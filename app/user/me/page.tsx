// app/user/me/page.tsx (server)
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Me() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/register");
  const username = (session.user as any).username ?? (session.user?.name ?? "");
  if (!username) return redirect("/register");
  return redirect(`/user/${encodeURIComponent(username)}`);
}
