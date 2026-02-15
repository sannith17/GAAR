export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-bold mb-2">GAAR</h3>
          <p>Offizielle Reifen & Räder</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Rechtliches</h3>
          <ul>
            <li><a href="https://www.adac.de/" target="_blank" className="underline">ADAC.de</a></li>
            <li><a href="https://www.tuev-sued.de/" target="_blank" className="underline">TÜV</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-sm">© 2026 GAAR. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
