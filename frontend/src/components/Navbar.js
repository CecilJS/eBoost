import React from "react";
import Link from "next/link";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
export default function Navbar() {
  return (
    <nav className="container flex flex-row justify-between mx-auto px-5 py-5">
      <div>
        <Link href="/" className="text-eBoost-blue font-bold text-1xl">
          eBoost
          <AcUnitIcon />
        </Link>
      </div>
      <div className="flex items-end">
        <ul className="flex flex-row list-none justify-evenly space-x-8 cursor-pointer px-8 py-2 font-semibold text-eBoost-blue">
          <Link href="/">
            <li>
              Home <HomeIcon />
            </li>
          </Link>
          <Link href="/about">
            <li>
              About <InfoIcon />
            </li>
          </Link>

          <Link href="/logs">
            <li>
              Logs&nbsp; <MenuBookIcon />
            </li>
          </Link>
          <Link href="/login">
            <li>
              Login <LockOpenIcon />
            </li>
          </Link>
          <Link href="/settings">
            <li>
              Settings&nbsp;
              <SettingsSuggestIcon />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
