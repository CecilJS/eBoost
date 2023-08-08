import "./globals.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <section className="flex h-screen items-center justify-center mb-0">
        <div>
          <h1 className="text-6xl font-bold text-eBoost-blue shadow-xl py-4 px-4">
            Maintainence Made Easy
          </h1>
          <hr />
          <div className="flex flex-row items-center justify-center my-10 justify-evenly mt-8">
            <Link href="/predictions">
              <Button
                textColor="text-eBoost-blue"
                bgColor="bg-white-300"
                borderColor="border-eBoost-blue"
                hoverTextColor="text-white"
                hoverBgColor="bg-eBoost-blue"
                hoverBorderColor="border-eBoost-blue"
                onClick={() => {}}
              >
                Predictions
              </Button>
            </Link>
            <Link href="/logs">
              <Button
                textColor="text-white"
                bgColor="bg-eBoost-blue"
                borderColor="border-eBoost-blue"
                hoverTextColor="text-eBoost-blue"
                hoverBgColor="bg-white"
                hoverBorderColor="border-eBoost-blue"
                onClick={() => {}}
              >
                Logs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
