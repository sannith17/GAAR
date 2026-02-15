import fs from "fs";
import path from "path";
import { useState } from "react";
import Papa from "papaparse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "Car_Tyres_Dataset.csv");
  const csvFile = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim()
  });

  const tyres = parsed.data
    .filter((item) => item.Brand)
    .map((item) => ({
      brand: item.Brand || null,
      model: item.Model || null,
      submodel: item.Submodel || null,
      tyreBrand: item["Tyre Brand"] || null,
      serial: item["Serial No."] || null,
      type: item.Type || null,
      loadIndex: item["Load Index"] || null,
      size: item.Size || null,
      sellingPrice: item["Selling Price"] ? Number(item["Selling Price"].replace(/,/g,"")) : 0,
      originalPrice: item["Original Price"] ? Number(item["Original Price"].replace(/,/g,"")) : 0,
      rating: item.Rating || null,
      description: `High-quality tyre from ${item["Tyre Brand"]}, fits ${item.Model}`
    }));

  const brands = [...new Set(tyres.map(t => t.brand))].slice(0,6);

  return { props: { tyres, brands } };
}

export default function Home({ tyres, brands }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [popup, setPopup] = useState("");

  // Filter & sort
  let displayed = tyres;
  if (selectedBrand) displayed = displayed.filter(t => t.brand === selectedBrand);
  if (sortBy === "priceLow") displayed = [...displayed].sort((a,b)=>a.sellingPrice - b.sellingPrice);
  if (sortBy === "priceHigh") displayed = [...displayed].sort((a,b)=>b.sellingPrice - a.sellingPrice);

  const showPopup = (msg) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), 1500);
  }

  return (
    <>
      <Navbar />
      <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-racing text-primary mb-6">TYREO - Official Tyres & Wheels Store</h1>

        {/* Brand Icons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {brands.map(b => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-4 py-2 rounded shadow font-semibold transition ${
                selectedBrand === b ? "bg-primary text-white" : "bg-white text-primary hover:bg-blue-100"
              }`}
            >
              {b}
            </button>
          ))}
          <button
            onClick={() => setSelectedBrand(null)}
            className="px-4 py-2 rounded shadow bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            All Brands
          </button>
        </div>

        {/* Sorting */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <span className="font-semibold">Sort by:</span>
          <button onClick={() => {setSortBy("priceLow"); showPopup("Sorted: Price Low → High")}} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Price ↑</button>
          <button onClick={() => {setSortBy("priceHigh"); showPopup("Sorted: Price High → Low")}} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Price ↓</button>
        </div>

        {/* Popup */}
        {popup && (
          <div className="fixed top-5 right-5 bg-primary text-white px-4 py-2 rounded shadow-lg z-50 animate-slide-in">
            {popup}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayed.map((product, index) => (
            <ProductCard key={index} product={product} showPopup={showPopup} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
