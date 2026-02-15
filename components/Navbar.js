import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <a className="font-schwarz text-5xl text-primary font-bold">GAAR</a>
      </Link>

      {/* Menu */}
      <div className="flex gap-6">
        <Link href="/cart">
          <a className="text-gray-500 hover:text-gray-700 font-semibold">Warenkorb</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-500 hover:text-gray-700 font-semibold">Kontakt</a>
        </Link>
      </div>
    </nav>
  );
}
