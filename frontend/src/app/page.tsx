import "./globals.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="container flex flex-col justify-center my-10">
        <h1 className="text-2xl font-bold py-15">Maintainence Made Easy</h1>
        <div className="items-center">
          <div className="text-blue-600/100">Predictions</div>
          <div className="text-blue-600/75">Logs</div>
        </div>
      </section>
      <footer>
        <a className="fixed center-0 bottom-0 flex">
          &copy; eBoost - {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}
