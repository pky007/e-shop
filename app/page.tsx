import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header"
import HeroSection from "./components/hero"
import FeatureSection from "./components/feature/index"


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
