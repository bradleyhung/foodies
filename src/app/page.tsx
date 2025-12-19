import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Summary from "./components/summary";
import Procedure from "./components/procedure";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Summary />
      <Procedure />
    </main>
  );
}
