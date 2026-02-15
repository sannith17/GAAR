import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-racing text-primary mb-6">
          Your Cart
        </h1>

        {cart.length === 0 && <p>No items in cart.</p>}

        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow mb-4 flex justify-between"
          >
            <div>
              {item.tyreBrand} - {item.serial}
              <p>₹{item.sellingPrice}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
