import Image from "next/image"
import "./index.css"
import Product from "./product"
import { Products } from "@/app/utils/json"
import SectionLayout from "../section"


type Props = {}
export default function index({ }: Props) {
    return (
        <SectionLayout
            heading="Featured Products"
        >
            {
                Products?.map((item, index) => {
                    return (
                        <div key={index} className="col-md-3">
                            <Product
                                {...item}
                            />
                        </div>)
                })
            }
        </SectionLayout>

    )
}