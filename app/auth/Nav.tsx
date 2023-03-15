import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Nav() {
  //   const session = await getServerSession(authOptions);
  //   console.log(session);

  return (
    <nav className="absolute top-0 right-0 left-0 flex justify-between w-full px-10 py-3 bg-slate-400/20 shadow-xl text-white/80 backdrop-blur-sm ">
      <Link href={"/"}>
        <h1>Send it</h1>
      </Link>

      <ul>
        <Login />
      </ul>
    </nav>
  );
}
