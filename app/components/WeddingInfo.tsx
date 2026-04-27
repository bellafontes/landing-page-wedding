export default function WeddingInfo() {
    return (
        <section className="flex flex-col items-center py-8 px-6 text-center">
            <h1 className="font-script text-6xl md:text-8xl text-[#A34343] my-8">
                Thamirys <span className="text-3xl align-middle mx-2">❤</span> Giovane
            </h1>

            <div className="flex items-center justify-center gap-6 md:gap-10 border-y border-gray-100 py-8 w-full max-w-sm">
                <div className="text-right">
                    <span className="block text-5xl font-bold text-gray-700">15</span>
                    <span className="uppercase tracking-widest text-xs font-sans">Agosto</span>
                </div>

                <div className="h-16 w-[1px] bg-gray-300"></div>

                <div className="text-left">
                    <span className="block text-xs uppercase tracking-[0.2em] font-sans mb-1">Sábado</span>
                    <span className="block text-4xl font-bold text-gray-700 font-sans">08:40</span>
                </div>
            </div>

            <div className="mt-10 group">
                <p className="font-serif text-lg text-gray-600">Capela do Cruzeiro de Santa Luzia</p>
                <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-xs font-sans underline decoration-gray-300 hover:text-[#A34343] transition-colors"
                >
                    Rua 12 de Outubro, 14 - Vila Seabra, Bauru/SP
                </a>
            </div>
        </section>
    );
}