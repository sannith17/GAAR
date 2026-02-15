import fs from "fs";
import path from "path";
import Papa from "papaparse";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export async function getStaticPaths() {
  const topModels = ["Swift", "Baleno", "Dzire", "Vitara", "Ertiga"];
  const paths = topModels.map((m) => ({ params: { model: m } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "Car_Tyres_Dataset.csv");
  const csvFile = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(csvFile, { header: true, skipEmptyLines: true });
  const tyres = parsed.data
    .filter(item => item.Model?.includes(params.model))
    .map(item => ({
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
      description: `Hochwertiger Reifen von ${item["Tyre Brand"]}, passend für ${item.Model}`
    }));

  return { props: { tyres, model: params.model } };
}

export default function ModelPage({ tyres, model }) {
  return (
    <>
      <Navbar />
      <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-racing text-primary mb-6">
          Reifen für {model}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tyres.map((product, index) => (
            <ProductCard key={index} product={product} showPopup={() => {}} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
