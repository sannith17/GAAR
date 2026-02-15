import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product, showPopup }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    showPopup && showPopup("Artikel zum Warenkorb hinzugefügt!");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1 duration-200">
      <img
        src={`https://source.unsplash.com/300x300/?tyre,${product.tyreBrand}`}
        alt={product.tyreBrand}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="font-semibold mt-3 text-lg">{product.tyreBrand} - {product.serial}</h2>
      <p className="text-gray-500 text-sm">{product.size}</p>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-primary font-bold text-lg">₹{product.sellingPrice}</span>
        {product.rating && (
          <span className="text-yellow-400 font-bold">⭐ {product.rating}</span>
        )}
      </div>
      <button
        onClick={handleAdd}
        className="bg-primary text-white w-full mt-3 py-2 rounded hover:bg-blue-700 transition"
      >
        In den Warenkorb
      </button>
    </div>
  );
}
