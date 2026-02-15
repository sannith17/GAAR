import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import tyres from "../data/tyres.json";

export default function Home() {
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
