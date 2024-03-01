import { AdsType } from "@/app/utils/type"
import "./index.css"
import Image from "next/image"


export default function index({thumbnail, text1, text2, text3}: AdsType) {
    return (
        <div className="card-ads1" style={{ backgroundImage: `url(${thumbnail})` }}>
           <div className="card-ads1-container">
           <span className="text1">
                {text1}
            </span>
            <h3 className="text2">{text2}</h3>
            <p className="text3">{text3}</p>
            <button type="button" className="btn button-shop-now btn-lg">Shop now 
            <Image
                src={"/images/icon/arrow_right.svg"}
                alt="click here"
                width={15}
                height={12}
            />
            </button>
           </div>
        </div>
    )
}