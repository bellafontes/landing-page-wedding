const actions = [
    { label: "Lista de Presentes", icon: "🎁", sub: "Clique para ver" },
    { label: "Recepção", icon: "📍", sub: "10h - Brunch" },
    { label: "Confirmação", icon: "📋", sub: "de presença" },
];

export default function ActionCards() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 max-w-4xl mx-auto w-full">
            {actions.map((item) => (
                <button key={item.label} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-[#E58E8E] flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                        {item.icon}
                    </div>
                    <span className="font-serif text-gray-700 font-medium italic">{item.label}</span>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-gray-400 mt-1">{item.sub}</span>
                </button>
            ))}
        </section>
    );
}