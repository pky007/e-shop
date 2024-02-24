import Image from "next/image"
import "./index.css"
import Product from "./product"

type Props = {}
export default function index({ }: Props) {
    return (
        <div className="row">
            <h3 className="section-heading-product">Featured Products</h3>
            <div className="col-md-3">
                <Product />
            </div>
            <div className="col-md-3">
                <Product />
            </div>
            <div className="col-md-3">
                <Product />
            </div>
            <div className="col-md-3">
                <Product />
            </div>
        </div>

    )
}