import HeroSection from "./HeroSection"
import FeatureSection from "./FeatureSection"
import FeatureProductSection from "./FeatureProductSection"
import ProductSection from "./ProductSection"
import CategorySection from "./CategorySection"
import CustomerSection from "./Customer"
import Testimonials from "@/app/components/customer/testimonials"
import { AdsSection1, AdsSection2, AdsSection3 } from "./AdsSection"
import "./index.css"


function index() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FeatureProductSection />
      <CategorySection />
      <CustomerSection/>
      <ProductSection />
      <AdsSection2/>
      <AdsSection1 />
      <Testimonials/>
      <AdsSection3/>
    </>

  )
}

export default index