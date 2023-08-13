"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "@/components/Footer";
import "../globals.css";

export default function Predictions() {
  const cardsData = [
    {
      title: "Start Stop System",
      content:
        "The start-stop system, also known as the idle-stop or stop-start system, is an automotive technology designed to improve fuel efficiency and reduce emissions in vehicles equipped with internal combustion engines.",
    },
  ];

  return (
    <main className="font-sans background">
      <Navbar />
      <section className="container mx-auto">
        <div className="flex flex-row">
          <h1 className="text-2xl w-64 h-64 font-bold text-eBoost-blue py-4 center">
            Predict Device Health
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {cardsData.map((card, index) => (
            <div
              key={card.title}
              className="w-screen md:w-1/2 lg:w-1/3 px-10 mb-14"
            >
              <Card title={card.title} content={card.content} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
