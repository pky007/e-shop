import ProductComponent from "@/app/components/product/index"
import SectionLayout from "@/app/components/section"
import { Products } from "@/app/utils/json"
type Props = {}

function FeatureProductSection({ }: Props) {
  return (
    <SectionLayout
      heading="Introducing Our Products"
      isViewAll={true}
    >
      <ProductComponent
        data={Products}
      />
    </SectionLayout>
  )
}

export default FeatureProductSection