import { AdsType } from "@/app/utils/type"
import "./index.css"


export default function index({thumbnail}: AdsType) {
    return (
        <div className="card-ads1" style={{ backgroundImage: `url(${thumbnail})` }}>
        </div>
    )
}