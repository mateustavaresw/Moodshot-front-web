import SectionHeader from "./SectionHeader";
import MoodCard from "./MoodCard";

function Gallery({ moods }) {
  return (
    <section id="galeria" className="border-t border-white/10 bg-[#0B101C] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Galeria"
          title="Cada mood, uma experiência visual diferente."
          description="Um preview de como a interface do MoodShot se adapta ao contexto escolhido pelo usuário antes de tirar a foto."
        />

        {/* gallery-grid ta no index.css */}
        <div className="gallery-grid mt-14">
          {moods.map((mood) => (
            <MoodCard key={mood.id} mood={mood} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
