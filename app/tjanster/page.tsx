export default function TjansterPage() {
  return (
    <div className="max-w-3xl w-full mx-auto bg-white/95 shadow-lg rounded-xl p-10 space-y-10">
      <h1 className="text-3xl font-semibold text-center text-[#2B2B2B]">
        Våra tjänster
      </h1>

      <p className="text-gray-700 text-center max-w-xl mx-auto">
        Vi erbjuder professionell stenspräckning och relaterade tjänster för
        svenska villatomter. Allt utförs med fokus på säkerhet, kontroll och
        tydlig kommunikation.
      </p>

      <div className="space-y-8">
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-[#2B2B2B]">
            Stenspräckning
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Kontrollerad spräckning av stenblock med borrning och expanderande
            medel. Perfekt för villatomter där man vill undvika vibrationer,
            buller och risker.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-[#2B2B2B]">
            Borrning av sten
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Vi borrar hål i stenblock inför spräckning eller för andra
            ändamål. All borrning utförs med modern utrustning och hög precision.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-[#2B2B2B]">
            Bortforsling av sten
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Efter spräckning kan vi hjälpa till att transportera bort stenmassor
            från tomten. En smidig helhetslösning för dig som vill bli helt klar.
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/"
          className="text-[#3E5F43] font-medium hover:underline text-sm"
        >
          Tillbaka till startsidan
        </a>
      </div>
    </div>
  );
}
