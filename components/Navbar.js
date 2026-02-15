import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <a className="flex items-center gap-2">
          {/* Tyre icon for G */}
          <span className="inline-block w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
            G
          </span>
          {/* Remaining letters in Schwarz */}
          <span className="font-schwarz text-3xl text-primary">AAR</span>
        </a>
      </Link>

      <div className="flex gap-6">
        <Link href="/cart"><a className="text-gray-700 hover:text-primary">Warenkorb</a></Link>
        <Link href="/contact"><a className="text-gray-700 hover:text-primary">Kontakt</a></Link>
      </div>
    </nav>
  );
}
