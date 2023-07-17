import "./globals.css";

export default function Navbar() {
  return (
    <nav className="container flex flex-row justify-between mx-auto px-5 py-5">
      <div>
        <a>eBoost</a>
      </div>
      <div className="flex items-end">
        <ul className="flex flex-row list-none justify-evenly">
          <li>Home</li>
          <li>About</li>
          <li>Messages</li>
          <li>Maintenance Schedule</li>
          <li>Login</li>
          <li>Settings</li>
        </ul>
      </div>
    </nav>
  );
}
