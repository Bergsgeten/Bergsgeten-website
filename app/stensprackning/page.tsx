// app/stensprackning/page.tsx

export default function StensprackningPage() {
  return (
    <div className="max-w-2xl w-full bg-white/95 shadow-lg rounded-xl p-8 space-y-8">
      <h1 className="text-2xl font-semibold text-center">
        Så fungerar stenspräckning
      </h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vad är stenspräckning?</h2>
        <p className="text-sm text-gray-700">
          Stenspräckning är en kontrollerad metod där man delar stenblock utan
          sprängämnen. Perfekt för villatomter där man vill undvika vibrationer,
          buller och risker.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Hur går det till?</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Vi bedömer stenen och dess placering.</li>
          <li>Vi borrar hål i stenen.</li>
          <li>Vi använder expanderande medel eller hydraulik.</li>
          <li>Stenen spricker kontrollerat i mindre delar.</li>
          <li>Bortforsling kan erbjudas vid behov.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Säkerhet</h2>
        <p className="text-sm text-gray-700">
          Metoden är tyst, vibrationsfri och helt utan sprängverkan. Trygg för
          barn, husdjur och grannar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vanliga missförstånd</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Det låter som sprängning – nej, det är nästan ljudlöst.</li>
          <li>Det skadar huset – nej, inga vibrationer.</li>
          <li>Det är farligt – nej, metoden är mycket säker.</li>
          <li>Det tar lång tid – oftast klart på 1–3 timmar.</li>
        </ul>
      </section>

      <div className="text-center">
        <a
          href="/"
          className="text-[#3E5F43] font-medium hover:underline text-sm"
        >
          Tillbaka till offertformuläret
        </a>
      </div>
    </div>
  );
}
