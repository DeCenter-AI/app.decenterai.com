import Image from "next/image";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Demo from "./components/home/Demo";
import Features from "./components/home/Features";
import Token from "./components/home/Token";
import Team from "./components/home/Team";
import Action from "./components/home/Action";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main className="bg-primary_13">
      <Hero />
      <About />
      <Demo />
      <Features />
      <Token />
      {/* <Team /> */}
      <Action />
      <Footer />
    </main>
  );
}
