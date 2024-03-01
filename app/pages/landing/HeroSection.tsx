import HeroComponent from "@/app/components/hero"
import { HeroCarousel } from "@/app/utils/json"

export default function HeroSection() {
    return (
        <HeroComponent data={HeroCarousel} />
    )
}