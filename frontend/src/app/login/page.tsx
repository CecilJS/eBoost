"use client";
import "../../app/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <main className="font-sans background">
      <Navbar />
      <section className="flex h-screen items-center justify-center mb-0">
        <div>
          <h1
            className="text-6xl font-bold text-eBoost-blue shadow-xl py-4 px-4"
            data-cy="login_page_heading"
          >
            This is the login page
          </h1>
          <hr />
        </div>
      </section>
      <Footer />
    </main>
  );
}
