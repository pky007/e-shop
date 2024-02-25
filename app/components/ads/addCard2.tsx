"use client"
import "./index.css"
import { ProductType } from "@/app/utils/type"

type Props = {
    thumbnail:string
}
export default function index({thumbnail}: Props) {
    return (
        <div className="card-ads2" style={{ backgroundImage: `url(${thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        </div>
        
    )
}