
import styles from "./page.module.css";
import Header from "./components/header"
import HeroSection from "./components/hero"
import FeatureSection from "./components/feature/index"
import ProductSection from "./components/product/index"
import CategorySection from "./components/category/index"
import AdsSection from "./components/ads/index"
import BigAdsSection from "./components/ads/bigAds"
import "./index.css"
import Footer from "./components/footer";




const Layout = ({ children }: any) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
const Layout2 = ({ children }: any) => {
  return (
    <div className="container-fluid">
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
        <CategorySection />
        <ProductSection />
        <AdsSection />
      </Layout>
      <Layout2>
      <BigAdsSection />
      </Layout2>
      
      <Layout>
      <ProductSection />
        </Layout>
      <Footer />
    </main>
  );
}
