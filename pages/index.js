import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const topModels = ["Swift", "Baleno", "Dzire", "Vitara", "Ertiga"];

export default function Home() {

  // Play click sound
  const playClick = () => {
    const audio = new Audio("/click.mp3"); // place click.mp3 in /public folder
    audio.play();
  };

  return (
    <>
      <Navbar />
      <div className="relative h-screen bg-gray-50">
        {/* Hero Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?tyre,racing,car')" }}
        ></div>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-schwarz text-primary font-bold mb-6">
            Willkommen bei GAAR
          </h1>
          <p className="max-w-3xl text-white text-lg md:text-xl mb-8">
            Entdecken Sie hochwertige Reifen für Ihr Fahrzeug. Offizielle Reifen für deutsche Straßen, TÜV/ECE zertifiziert.
          </p>

          {/* Top Car Models */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {topModels.map((model) => (
              <Link key={model} href={`/models/${model}`}>
                <a
                  onClick={playClick}
                  className="bg-white rounded-full shadow-lg px-8 py-6 hover:shadow-2xl transition transform hover:-translate-y-1 text-primary font-semibold text-xl"
                >
                  {model}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
