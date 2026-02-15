import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const topModels = ["Swift", "Baleno", "Dzire", "Vitara", "Ertiga"];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen bg-gray-50">
        {/* Hero Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?tyre,car')" }}
        ></div>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-racing text-primary font-bold mb-6">
            Willkommen bei TYREO
          </h1>
          <p className="max-w-3xl text-white text-lg md:text-xl mb-8">
            Entdecken Sie hochwertige Reifen für Ihr Fahrzeug. Wir bieten offizielle
            Reifen für deutsche Straßen, zertifiziert nach allen geltenden Vorschriften
            und Gesetzen. Sicherheit, Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.
          </p>

          {/* Top Car Models */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {topModels.map((model) => (
              <Link key={model} href={`/models/${model}`}>
                <a className="bg-white rounded-lg shadow-lg px-4 py-6 hover:shadow-xl transition text-primary font-semibold">
                  {model}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* German Compliance Section */}
      <section className="bg-white py-12 px-6 md:px-24 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Rechtliche Hinweise & Sicherheit</h2>
        <p className="mb-3">
          Alle unsere Reifen entsprechen der EU- und deutschen Straßenverkehrsordnung (StVO)
          sowie den geltenden TÜV- und ECE-Zertifizierungen. Wir übernehmen die Verantwortung
          für korrekte Produktinformationen, sodass Ihre Sicherheit garantiert ist.
        </p>
        <p className="mb-3">
          Bitte beachten Sie, dass die Einhaltung von zulässigen Reifenkennzeichnungen, Last- und
          Geschwindigkeitsindex sowie Wartungsrichtlinien verpflichtend ist. TYREO übernimmt keine
          Haftung bei unsachgemäßer Montage oder Nutzung von nicht zugelassenen Reifen.
        </p>
        <p>
          Für weitere Informationen über Reifenkennzeichnungen, Umweltaspekte und gesetzliche Vorschriften
          besuchen Sie bitte <a href="https://www.adac.de/" target="_blank" className="text-primary underline">ADAC.de</a>.
        </p>
      </section>

      <Footer />
    </>
  );
}
