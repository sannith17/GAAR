import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <img
        src={`https://source.unsplash.com/300x300/?tyre`}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="font-semibold mt-3">
        {product.tyreBrand} - {product.serial}
      </h2>

      <p className="text-gray-500 text-sm">{product.size}</p>

      <div className="mt-2">
        <span className="text-primary font-bold text-lg">
          ₹{product.sellingPrice}
        </span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-primary text-white w-full mt-3 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
