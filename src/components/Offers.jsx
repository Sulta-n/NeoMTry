import cards from "./cards";

const Offers = () => {
  return (
    <section id="offers" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-12 text-3xl md:text-4xl font-bold text-amber-50">
          Our <span className="text-primary/70">Best offers</span>
        </h1>
        <p className="text-amber-50 text-sm mb-5">
          An immersive way to reconnect with moments that shaped you. Whether
          it’s the sound of a childhood melody, the glow of a sunset from a
          favorite trip, or the warmth of a conversation long past, Neo Memories
          transforms fleeting experiences into lasting treasures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, key) => (
            <div
              key={key}
              className="group rounded-lg overflow-hidden shadow-2xs bg-card/40 p-6"
            >
              <div className="h-33 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between bg-secondary py-2 px-1 rounded-sm mt-1">
                <p>{card.name}</p>
                <span className="text-amber-50">{card.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
