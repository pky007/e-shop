import Image from "next/image"
import "./index.css"
import { ProductType } from "@/app/utils/type"
import Rating from "../rating/index"

type Props = {}
export default function index({ name,
    price,
    cutPrice,
    status,
    rating,
    saleTag,
    thumbnail,
    inStock }: ProductType) {
    return (
        <div className="card card-container-product" style={{ backgroundImage: `url(${thumbnail})` }}>
            {saleTag && <div className="card-top-left">
                <span className="">{saleTag}</span>
            </div>}
            <div className="card-top-right">
                <div>
                    <Image
                        src={'/images/products/AddTowishlist.png'}
                        width={40}
                        height={40}
                        alt="addToCart"
                    />
                </div>
                <div className="view-icon">
                    <Image
                        src={'/images/products/QuickView.png'}
                        width={40}
                        height={40}
                        alt="addToCart"
                    />
                </div>
            </div>
            <div className="card-bottom-left">
                <div className="product-name body-14-400">{name}</div>
                <div className="cart-container">
                    <div className="price_div">
                        <span className="price-product">{price} </span>
                        {cutPrice && <span className="cut-price-product">{cutPrice}</span>}
                    </div>
                </div>
                <div>
                  <Rating rating={rating}/>
                </div>
            </div>
            <div className="card-bottom-right">
                <Image
                    src={'/images/products/AddToCart.png'}
                    width={40}
                    height={40}
                    alt="addToCart"
                    className="product-add-to-cart"
                />
            </div>
        </div>
    )
}