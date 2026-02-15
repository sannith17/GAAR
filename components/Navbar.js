import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-racing">GAAR</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
