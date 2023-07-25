import "./globals.css";

export default function Navbar() {
  return (
    <nav className="container flex flex-row justify-between mx-auto px-5 py-5">
      <div>
        <a className="text-eBoost-blue font-bold text-1xl">eBoost</a>
      </div>
      <div className="flex items-end">
        <ul className="flex flex-row list-none justify-evenly space-x-8 cursor-pointer px-8 py-2 font-semibold text-eBoost-blue">
          <li>Home</li>
          <li>About</li>
          <li>Messages</li>
          <li>Maintenance </li>
          <li>Login</li>
          <li>Settings</li>
        </ul>
      </div>
    </nav>
  );
}
