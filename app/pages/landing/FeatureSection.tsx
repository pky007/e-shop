import FeatureComponent from "@/app/components/feature/index"
import { FeatureSectionData } from "@/app/utils/json"

type Props = {}

function FeatureSection({ }: Props) {
    return (
        <FeatureComponent data={FeatureSectionData} />
    )
}

export default FeatureSection