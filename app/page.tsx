import Hero from "./components/Hero";
import WeddingInfo from "./components/WeddingInfo";
import ActionCards from "./components/ActionCards";

export default function Home() {
  return (
      <main className="relative min-height-screen overflow-hidden bg-[url('/bg-texture.png')] bg-repeat">
        {/* Elementos Florais (Posicionamento Absoluto) */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[url('/flowers-top-left.png')] bg-contain bg-no-repeat opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-[url('/flowers-top-right.png')] bg-contain bg-no-repeat opacity-80 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center pb-20">
          <Hero />
          <WeddingInfo />
          <ActionCards />

          <footer className="mt-12 text-center">
            <p className="font-serif italic text-[#A34343]">Sua presença tornará esse momento ainda mais especial!</p>
          </footer>
        </div>

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/flowers-bottom-left.png')] bg-contain bg-no-repeat opacity-60 pointer-events-none" />
      </main>
  );
}