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
    transformHeader: (header) => header.trim()
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
      sellingPrice: item["Selling Price"]
        ? Number(item["Selling Price"].replace(/,/g, ""))
        : 0,
      originalPrice: item["Original Price"]
        ? Number(item["Original Price"].replace(/,/g, ""))
        : 0,
      rating: item.Rating ? item.Rating : null,
      description: `High-quality tyre from ${item["Tyre Brand"]}, suitable for ${item.Model}`
    }));

  // Get unique brands for top icons
  const brands = [...new Set(tyres.map((t) => t.brand))].slice(0, 6);

  return {
    props: { tyres, brands }
  };
}

export default function Home({ tyres, brands }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [popup, setPopup] = useState("");

  // Filter and sort
  let displayed = tyres;
  if (selectedBrand) displayed = displayed.filter(t => t.brand === selectedBrand);
  if (sortBy === "priceLow") displayed = [...displayed].sort((a,b) => a.sellingPrice - b.sellingPrice);
  if (sortBy === "priceHigh") displayed = [...displayed].sort((a,b) => b.sellingPrice - a.sellingPrice);

  // Popup handler
  const showPopup = (msg) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), 1500);
  }

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-racing text-primary mb-6">TYREO - Official Tyres & Wheels Store</h1>

        {/* Brand Icons */}
        <div className="flex gap-4 mb-6">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-4 py-2 rounded shadow ${
                selectedBrand === b ? "bg-primary text-white" : "bg-white text-primary"
              }`}
            >
              {b}
            </button>
          ))}
          <button
            onClick={() => setSelectedBrand(null)}
            className="px-4 py-2 rounded shadow bg-gray-100 text-gray-700"
          >
            All Brands
          </button>
        </div>

        {/* Sort */}
        <div className="flex gap-4 mb-6">
          <span>Sort by: </span>
          <button onClick={() => setSortBy("priceLow")} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Price Low → High</button>
          <button onClick={() => setSortBy("priceHigh")} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Price High → Low</button>
        </div>

        {/* Popup */}
        {popup && (
          <div className="fixed top-5 right-5 bg-primary text-white px-4 py-2 rounded shadow-lg z-50">
            {popup}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayed.map((product, index) => (
            <ProductCard key={index} product={product} showPopup={showPopup} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
