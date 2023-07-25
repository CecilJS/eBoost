import "./globals.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <section className="flex h-screen items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold text-eBoost-blue shadow-xl py-4 px-4">
            Maintainence Made Easy
          </h1>
          <hr />
          <div className="flex flex-row items-center justify-center my-10 justify-evenly mt-8">
            <div className="text-1xl font-bold text-eBoost-blue cursor-pointer rounded-xl bg-white-300 p-4 border border-eBoost-blue w-64 text-center hover:bg-eBoost-blue hover:text-white">
              Predictions
            </div>
            <div className="text-1xl font-bold text-white cursor-pointer rounded-xl bg-eBoost-blue p-4 border w-64 text-center hover:bg-white hover:text-eBoost-blue hover:border-eBoost-blue">
              Logs
            </div>
          </div>
        </div>
      </section>
      <footer className="flex">
        <a className="flex fixed bottom-0 flex items-center justify-center">
          &copy; eBoost - {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}
