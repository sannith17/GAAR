import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const topModels = ["Swift", "Baleno", "Dzire", "Vitara", "Ertiga"];

export default function Home() {
  const playClick = () => {
    const audio = new Audio("/click.mp3");
    audio.play();
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1619023980550-72b47d618c5e?auto=format&fit=crop&w=1600&q=80')"
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-schwarz text-primary font-bold mb-4">
            Willkommen bei GAAR
          </h1>
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl mb-8 font-racing">
            Offizielle Reifen & Räder für Ihr Auto – TÜV/ECE zertifiziert, geprüft und bereit für deutsche Straßen. Qualität, Sicherheit und Leidenschaft für jedes Kilometer-Erlebnis.
          </p>

          {/* Top Models */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {topModels.map((model) => (
              <Link key={model} href={`/models/${model}`}>
                <a
                  onClick={playClick}
                  className="bg-white rounded-full shadow-lg px-10 py-6 hover:shadow-2xl transform hover:-translate-y-1 transition text-primary font-semibold text-xl"
                >
                  {model}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-schwarz text-primary mb-6">
          5 Gründe, warum Sie Originalräder kaufen sollten!
        </h2>
        <p className="mb-4 text-gray-800">
          Ihr Auto verdient nur das Beste. Originalräder bieten maximale Sicherheit, perfekte Kontrolle und ein Fahrerlebnis, das begeistert. Unsere Räder sind TÜV/ECE geprüft und von führenden Herstellern wie Pirelli, Michelin, Continental, Dunlop, Goodyear und Bridgestone getestet.
        </p>
        <p className="mb-4 text-gray-800">
          Über 10.000 zufriedene Kunden vertrauen uns – nicht nur wegen der Qualität, sondern auch wegen unseres Service. Profitieren Sie von sofort montierbaren Kompletträdern, flexiblen Zahlungsmöglichkeiten und exklusiven Garantien.
        </p>
        <p className="mb-4 text-gray-800">
          Originalräder garantieren Sicherheit, präzise Passgenauigkeit und Wertbeständigkeit. Bestellen Sie jetzt und erleben Sie Fahrsicherheit, Fahrspaß und Perfektion bei jedem Kilometer.
        </p>
        <p className="mb-4 text-gray-800">
          Serviceversprechen: Beratung per E-Mail, WhatsApp oder Telefon; 100 Tage Rückgaberecht; schnelle Auftragsabwicklung; jederzeit Sendungsverfolgung.
        </p>
        <p className="mb-4 text-gray-800">
          GAAR – Vertrauen, das bewegt. Kaufen Sie nur geprüfte Originalräder für Ihr Fahrzeug.
        </p>
      </section>

      <Footer />
    </>
  );
}
