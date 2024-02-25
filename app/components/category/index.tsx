import Image from "next/image"
import "./index.css"
import CategoryCard from "./category"
import SectionLayout from "../section"
import { Category } from "@/app/utils/json"

type Props = {}

function index({ }: Props) {
    return (
        <div className="category-page">
            <SectionLayout
                heading="Shop by Top Categories"
            >
                {
                    Category?.map((item, index) => {
                        return (
                            <div key={index} className="col-md-2">
                                <CategoryCard
                                    {...item}
                                />
                            </div>
                        )
                    })
                }
            </SectionLayout>
        </div>
    )
}

export default index