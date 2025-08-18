import React, { useEffect } from "react";

export default function BannerOfNationsSite() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const offset = nav ? nav.offsetHeight : 0;

    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-green-400 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Banner of Nations</h1>
          <div className="space-x-6">
            <a href="#features" className="hover:text-green-300">Features</a>
            <a href="#world" className="hover:text-green-300">World</a>
            <a href="#war" className="hover:text-green-300">Battles</a>
            <a href="#economy" className="hover:text-green-300">Economy</a>
            <a href="#roadmap" className="hover:text-green-300">Roadmap</a>
            <a href="#contact" className="hover:text-green-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[92vh] flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1504600770771-fb03a6961d33')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Shape Your Nation. Command Your Armies.</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 opacity-95">
              Banner of Nations combines deep diplomacy, city-building, and epic real-time battles into one grand strategy experience.
            </p>
            <a
              href="#features"
              className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl shadow-lg"
            >
              Discover More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Core Features</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Grand Strategy</h4>
              <p>Manage your empire on a vast map. Control provinces, economy, research, and politics.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Real-time Battles</h4>
              <p>Direct troops, use siege weapons, terrain impacts, and medics in battles that evolve over centuries.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">City & Buildings</h4>
              <p>Zoom into cities to build factories, farms, hospitals, and other infrastructure that affects your empire.</p>
            </div>
          </div>
        </section>

        {/* World & Diplomacy */}
        <section id="world" className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">World & Diplomacy</h3>
            <p className="text-lg leading-relaxed text-center opacity-95">
              Forge alliances, trade pacts, declare wars, demand ultimatums. Manage government, festivals, population happiness. Diplomacy is as powerful as warfare.
            </p>
          </div>
        </section>

        {/* Battles Section */}
        <section id="war" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Epic Battles Across Ages</h3>
            <p className="text-lg leading-relaxed text-center opacity-95">
              From catapults to missiles, control each soldier, place siege engines, and fight in terrains that impact every clash.
            </p>
          </div>
        </section>

        {/* Economy & Empire */}
        <section id="economy" className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Economy & Empire Management</h3>
            <ul className="space-y-4 text-lg">
              <li>💰 Manage taxes, inflation, and trade</li>
              <li>🏭 Build factories, farms, hospitals</li>
              <li>🧠 Invest in technology and research</li>
              <li>👥 Track population happiness and employment</li>
            </ul>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Roadmap</h3>
            <ul className="space-y-6 text-lg">
              <li>🚀 Early Access: March 2026</li>
              <li>🎯 Full Release: July 2026</li>
              <li>🌍 Platforms: PC + Mobile</li>
              <li>🎉 Launch Discount: 10% off</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Stay Connected</h3>
            <p className="mb-6">Wishlist Banner of Nations on Steam and join our community for updates.</p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl shadow-lg"
              onClick={(e) => { e.preventDefault(); console.log("Wishlist clicked"); }}
            >
              Wishlist on Steam
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-center py-6 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Banner of Nations. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

