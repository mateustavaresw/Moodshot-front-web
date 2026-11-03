import Hero from "../components/Hero";
import Research from "../components/Research";
import Persona from "../components/Persona";
import Solution from "../components/Solution";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import Innovation from "../components/Innovation";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  research,
  persona,
  solutions,
  steps,
  moods,
  innovations,
  members,
} from "../data/conteudo";

function Home() {
  return (
    <>
      <Hero moods={moods} />
      <Research items={research} />
      <Persona persona={persona} />
      <Solution items={solutions} />
      <Experience steps={steps} />
      <Gallery moods={moods} />
      <Innovation items={innovations} />
      <Team members={members} />
      <Contact />
      {/* footer so aparece na home */}
      <Footer />
    </>
  );
}

export default Home;
