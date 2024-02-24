import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header"
import HeroSection from "./components/hero"
import FeatureSection from "./components/feature/index"
import ProductSection from "./components/product/index"




const Layout = ({children}:any) => {
 return(
  <div className="container">
  {children}
</div>
 )
}

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Layout>
      <FeatureSection />
      <ProductSection />
      <FeatureSection />
      <FeatureSection />
      </Layout>
    </main>
  );
}
