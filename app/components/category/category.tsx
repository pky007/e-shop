import Image from "next/image"
import "./index.css"
import { CategoryType } from "@/app/utils/type"


function index({ name, status, thumbnail }: CategoryType) {
    return (
        <div className="category-card card">
            <Image className=""
                src={`${thumbnail}`}
                alt="First slide"
                width={80}
                height={80}
            />
            <h3 className="category-name">{name}</h3>

        </div>
    )
}

export default index