"use client";

import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Offertförfrågan skickad (demo).");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">

      {/* HERO */}
      <section className="relative mb-16">

        <img
          src="/goat.png"
          className="absolute right-[-80px] top-10 w-[450px] opacity-[0.08] mix-blend-multiply pointer-events-none select-none"
          alt="Bergsgeten"
        />

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#3E5F43] flex items-center justify-center text-white font-bold text-lg shadow-md">
                G
              </div>
              <span className="text-xs tracking-[0.25em] uppercase text-gray-600">
                Bergsgeten
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#2B2B2B] leading-tight">
              Premium stenspräckning<br />för svenska villatomter
            </h1>

            <p className="text-base text-gray-700 max-w-md">
              Trygg, kontrollerad och vibrationsfri spräckning av stenblock.
              Perfekt för villatomter där säkerhet och precision är viktigast.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-200 shadow-sm">
                ✓ Ingen sprängverkan
              </span>
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-200 shadow-sm">
                ✓ Perfekt för villatomter
              </span>
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-200 shadow-sm">
                ✓ Tryggt för hus & grannar
              </span>
            </div>

            <a href="#offert" className="inline-block mt-4">
              <button
                className="
                  px-6 py-3 rounded-md
                  bg-[#3E5F43]
                  text-[#f3f0e7] font-semibold tracking-wide
                  border border-[#2f4634]
                  shadow-[0_2px_6px_rgba(0,0,0,0.25)]
                  hover:bg-[#324a35]
                  hover:shadow-[0_3px_10px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                "
              >
                Skicka offertförfrågan
              </button>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-[#d9d4c7] via-[#c7c1b3] to-[#b3ac9c] border border-[#b0aa9b] shadow-xl p-6 md:p-8">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Stenspräckning, inte sprängning
                </p>
                <p className="text-sm md:text-base text-gray-800">
                  Kontrollerad spräckning av stenblock med borrning och expanderande medel.
                  Minimal ljudnivå, inga vibrationer och ingen sprängverkan.
                </p>
                <p className="text-xs text-gray-700">
                  Vi bedömer varje uppdrag individuellt och ger en tydlig offert innan arbete påbörjas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section id="offert" className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-start">

        {/* FORMULÄR */}
        <div
  className="
    bg-[#f8f6f2]
    rounded-3xl
    border border-[#d2c9b8]
    shadow-[0_8px_20px_rgba(0,0,0,0.15)]
    p-10
    space-y-10
  "
>
  <div className="space-y-2">
    <h2 className="text-3xl font-semibold text-[#2B2B2B] tracking-wide">
      Skicka offertförfrågan
    </h2>
    <p className="text-sm text-gray-700">
      Fyll i dina uppgifter så återkommer vi med en seriös bedömning och prisförslag.
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-8">

    <div className="space-y-6">

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">Namn</label>
        <input
          type="text"
          required
          className="
            w-full
            max-w-md
            h-[60px]
            rounded-2xl
            border border-[#cfc7b8]
            px-5 text-sm
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-[#3E5F43]
          "
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">Adress</label>
        <input
          type="text"
          required
          className="
            w-full
            max-w-md
            h-[60px]
            rounded-2xl
            border border-[#cfc7b8]
            px-5 text-sm
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-[#3E5F43]
          "
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">Telefonnummer</label>
        <input
          type="tel"
          required
          className="
            w-full
            max-w-md
            h-[60px]
            rounded-2xl
            border border-[#cfc7b8]
            px-5 text-sm
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-[#3E5F43]
          "
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">
          Ungefärlig storlek på stenen
        </label>
        <input
          type="text"
          placeholder="t.ex. 1,5 × 1 m"
          className="
            w-full
            max-w-md
            h-[60px]
            rounded-2xl
            border border-[#cfc7b8]
            px-5 text-sm
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-[#3E5F43]
          "
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">
          Beskrivning av läget (valfritt)
        </label>
        <textarea
          rows={4}
          className="
            w-full
            max-w-md
            rounded-2xl
            border border-[#cfc7b8]
            px-5 py-3 text-sm
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-[#3E5F43]
          "
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-[#2B2B2B]">Bild på stenen</label>
        <input
          type="file"
          accept="image/*"
          className="w-full max-w-md text-sm"
        />
        <p className="text-xs text-gray-500">
          En tydlig bild hjälper oss att göra en bättre bedömning.
        </p>
      </div>

    </div>

    <button
      type="submit"
      className="
        w-[160px]
        px-6 py-3
        rounded-full
        bg-[#3E5F43]
        text-[#f3f0e7] font-semibold tracking-wide
        border border-[#2f4634]
        shadow-[0_4px_10px_rgba(0,0,0,0.25)]
        hover:bg-[#324a35]
        hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)]
        transition-all duration-300
      "
    >
      Skicka offert
    </button>

  </form>
</div>

        {/* SIDOPANEL */}
        <div className="space-y-6">
          <div className="bg-white/90 shadow-md rounded-2xl p-5 md:p-6 space-y-3">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">
              Varför Bergsgeten?
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Specialiserade på stenspräckning för privatpersoner.</li>
              <li>• Metoder anpassade för svenska villatomter.</li>
              <li>• Fokus på säkerhet, kontroll och tydlig kommunikation.</li>
            </ul>
          </div>

          <div className="bg-white/90 shadow-md rounded-2xl p-5 md:p-6 space-y-3">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">
              Läs mer om metoden
            </h3>

            <p className="text-sm text-gray-700">
              Vill du förstå exakt hur stenspräckning går till?
            </p>

            <a
              href="/stensprackning"
              className="inline-flex items-center text-sm font-medium text-[#3E5F43] hover:underline"
            >
              Så fungerar stenspräckning →
            </a>

            <a
              href="/tjanster"
              className="inline-flex items-center text-sm font-medium text-[#3E5F43] hover:underline"
            >
              Våra tjänster →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
