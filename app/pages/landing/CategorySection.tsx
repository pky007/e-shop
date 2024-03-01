import CategorySection from "@/app/components/category"
import SectionLayout from "@/app/components/section"
import { Category } from "@/app/utils/json"

type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <SectionLayout
            heading="Shop by Top Categories"
            isViewAll={true}
        >
            <CategorySection data={Category} />
        </SectionLayout>
    )
}