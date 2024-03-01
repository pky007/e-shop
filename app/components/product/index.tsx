import Product from "./product"
import { ProductType } from "@/app/utils/type"
import "./index.css"

type Props = {
    data: ProductType[]
}
export default function index({ data }: Props) {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="col-md-3 mb-3">
                            <Product
                                {...item}
                            />
                        </div>)
                })
            }
        </>
    )
}