import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <a className="text-primary font-bold text-2xl font-racing">TYREO</a>
      </Link>
      <div className="flex gap-6">
        <Link href="/cart"><a className="text-gray-700 hover:text-primary">Warenkorb</a></Link>
        <Link href="/contact"><a className="text-gray-700 hover:text-primary">Kontakt</a></Link>
      </div>
    </nav>
  );
}
