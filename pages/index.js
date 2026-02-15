import fs from "fs";
import path from "path";
import Papa from "papaparse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "Car_Tyres_Dataset.csv");
  const csvFile = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(csvFile, {
    header: true,
    skipEmptyLines: true
  });

  const tyres = parsed.data.map((item) => ({
    brand: item.Brand,
    model: item.Model,
    submodel: item.Submodel,
    tyreBrand: item["Tyre Brand"],
    serial: item["Serial No."],
    type: item.Type,
    loadIndex: item["Load Index"],
    size: item.Size,
    sellingPrice: Number(item["Selling Price"].replace(/,/g, "")),
    originalPrice: Number(item["Original Price"].replace(/,/g, "")),
    rating: item.Rating || "N/A"
  }));

  return {
    props: { tyres }
  };
}

export default function Home({ tyres }) {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-racing text-primary mb-6">
          Official Tyres & Wheels Store
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {tyres.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
