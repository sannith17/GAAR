import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <a className="flex items-center gap-2">
          <span className="inline-block w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-2xl">
            G
          </span>
          <span className="font-schwarz text-4xl text-white">AAR</span>
        </a>
      </Link>
      <div className="flex gap-6">
        <Link href="/cart">
          <a className="text-white hover:text-gray-300 font-semibold">Warenkorb</a>
        </Link>
        <Link href="/contact">
          <a className="text-white hover:text-gray-300 font-semibold">Kontakt</a>
        </Link>
      </div>
    </nav>
  );
}
