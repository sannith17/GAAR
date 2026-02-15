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
    skipEmptyLines: true,
    transformHeader: (header) => header.trim()
  });

  const tyres = parsed.data
    .filter((item) => item.Brand) // remove empty rows
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
      rating: item.Rating ? item.Rating : null
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
