import Link from "next/link";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <>
      <div>
        Protected Page
        <Link
          href="/api/auth/signout"
          className="px-5 py-1 border border-green-400"
        >
          Logout
        </Link>
      </div>
    </>
  );
}
