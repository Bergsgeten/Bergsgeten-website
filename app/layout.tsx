// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bergsgeten – Stenspräckning för privatpersoner",
  description: "Trygg och effektiv stenspräckning på villatomter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="bg-[#D9D4C7] text-[#2B2B2B]">
        <header className="py-6 text-center">
          <a href="/" className="inline-flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#3E5F43] flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className="mt-2 font-semibold">Bergsgeten</span>
          </a>
        </header>

        <main className="min-h-screen flex items-start justify-center py-10">
          {children}
        </main>

        <footer className="mt-20 py-10 text-center text-sm text-gray-700 border-t">
          <div className="font-semibold">Bergsgeten AB</div>
          <div>Telefon: 070‑123 45 67</div>
          <div>Mejl: info@bergsgeten.se</div>
          <div>Åkersberga, Stockholm</div>
        </footer>
      </body>
    </html>
  );
}
