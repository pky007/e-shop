import Image from "next/image"
import "./index.css"
import { ProductType } from "@/app/utils/type"

type Props = {
    thumbnail:string
}
export default function index({thumbnail}: Props) {
    return (
        <div className="card-ads1" style={{ backgroundImage: `url(${thumbnail})` }}>
        </div>
    )
}