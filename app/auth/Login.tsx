"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <li className="list-none">
      <button onClick={() => signIn} className="text-xs">
        Sign In
      </button>
    </li>
  );
};

export default Login;
