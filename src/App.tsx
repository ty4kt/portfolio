import { useState } from "react";
import { Scene } from "./components/Scene";
import { Nav, type Tab } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const scrollRef = useScrollProgress();
  const [tab, setTab] = useState<Tab>("home");

  const select = (next: Tab) => {
    setTab(next);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Scene scrollRef={scrollRef} />
      <Nav active={tab} onSelect={select} />
      <main key={tab} className="page">
        {tab === "home" && <Hero onExplore={() => select("about")} />}
        {tab === "about" && <About />}
        {tab === "skills" && <Skills />}
        {tab === "work" && <Work />}
        {tab === "contact" && <Contact />}
      </main>
    </>
  );
}
