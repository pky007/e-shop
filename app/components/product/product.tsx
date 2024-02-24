import Image from "next/image"
import "./index.css"

type Props = {}
export default function index({ }: Props) {
    return (
        <div className="card card-container-product" style={{ backgroundImage: `url(/images/products/product1.png)` }}>
            <div className="card-top-left">
                <span className="">Sale 50%</span>
            </div>
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
                <div className="category-name">Green Apple</div>
                <div className="cart-container">
                    <div className="price_div">
                        <span className="price-product">$14.99 </span>
                        <span className="cut-price-product">$20.99</span>
                    </div>
                </div>
                <div>
                    *****
                </div>
            </div>
            <div className="card-bottom-right">
                <Image
                    src={'/images/products/addtocart.png'}
                    width={40}
                    height={40}
                    alt="addToCart"
                />
            </div>
        </div>
    )
}