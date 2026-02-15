import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CartContext } from "../../context/CartContext";
import tyresData from "../../data/tyres.json";

export default function ModelPage() {
  const router = useRouter();
  const { model } = router.query;
  const { addToCart } = useContext(CartContext);

  const [tyres, setTyres] = useState([]);
  const [sort, setSort] = useState("default");
  const [filterSize, setFilterSize] = useState("all");

  useEffect(() => {
    if (model) {
      const filtered = tyresData.filter((t) => t.model === model);
      setTyres(filtered);
    }
  }, [model]);

  const sortedTyres = [...tyres].sort((a, b) => {
    if (sort === "price-asc") return a.sellingPrice - b.sellingPrice;
    if (sort === "price-desc") return b.sellingPrice - a.sellingPrice;
    return 0;
  }).filter(t => filterSize === "all" ? true : t.size === filterSize);

  const sizes = Array.from(new Set(tyres.map(t => t.size)));

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-schwarz text-primary mb-6">{model} Reifen</h1>

        {/* Sorting & Filtering */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            className="border px-4 py-2 rounded"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sortieren</option>
            <option value="price-asc">Preis: Niedrig → Hoch</option>
            <option value="price-desc">Preis: Hoch → Niedrig</option>
          </select>

          <select
            className="border px-4 py-2 rounded"
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
          >
            <option value="all">Alle Größen</option>
            {sizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Tyres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedTyres.map((t, idx) => (
            <div key={idx} className="border rounded-lg shadow p-4 flex flex-col items-center">
              <img src={t.image || "/tyre-placeholder.jpg"} alt={t.tyreBrand} className="mb-2 w-40 h-40 object-contain"/>
              <h2 className="font-semibold text-lg mb-1">{t.tyreBrand} - {t.serialNo}</h2>
              <p className="text-gray-600 mb-2">{t.size}, {t.type}</p>
              <p className="text-primary font-bold mb-2">€ {t.sellingPrice}</p>
              <button
                onClick={() => addToCart(t)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                In Warenkorb
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
