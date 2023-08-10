import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container flex flex-row justify-between mx-auto px-5 py-5">
      <div>
        <Link href="/" className="text-eBoost-blue font-bold text-1xl">
          eBoost
        </Link>
      </div>
      <div className="flex items-end">
        <ul className="flex flex-row list-none justify-evenly space-x-8 cursor-pointer px-8 py-2 font-semibold text-eBoost-blue">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>

          <Link href="/logs">
            <li>Logs </li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/settings">
            <li>Settings</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
