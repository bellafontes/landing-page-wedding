export default function Hero() {
    return (
        <section className="flex flex-col items-center pt-16 pb-8 px-6 text-center">
            {/* Monograma Simulado */}
            <div className="font-script text-[#A34343] text-5xl mb-6 flex items-center gap-2">
                T <span className="text-2xl opacity-50">❤</span> G
            </div>

            <p className="font-serif italic text-sm md:text-base text-gray-600 max-w-xs md:max-w-md leading-relaxed">
                “Acima de tudo, <span className="font-bold">revistam-se do amor</span>, que é o elo perfeito.”
                <span className="block mt-2 font-sans font-semibold text-[10px] uppercase tracking-[0.2em]">Colossenses 3:14</span>
            </p>

            <div className="mt-12 text-[#A34343] font-sans text-xs tracking-[0.3em] uppercase">
                Convite Especial do nosso Casamento
            </div>
        </section>
    );
}