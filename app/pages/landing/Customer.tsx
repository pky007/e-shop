import CustomerCard from "@/app/components/customer"
import SectionLayout from "@/app/components/section"
import { Category } from "@/app/utils/json"

type Props = {}

export default function CustomerSection({ }: Props) {
    return (
        <SectionLayout
            heading=""
            isViewAll={false}
        >
            <CustomerCard />
        </SectionLayout>
    )
}