import Image from 'next/image'
import React from 'react'
import "./index.css"

type Props = {}

function index({ }: Props) {

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-3 card-container">
                    <Image className=""
                        src={"/images/feature/Icon1.png"}
                        alt="First slide"
                        width={50}
                        height={50}
                    />
                    <h6 className='feature-heading'>Free Shipping</h6>
                    <p className='description'>Free shipping with discount</p>
                </div>
                <div className="col-3 card-container">
                    <Image className=""
                        src={"/images/feature/Icon2.png"}
                        alt="First slide"
                        width={50}
                        height={50}
                    />
                    <h6 className='feature-heading'>Great Support 24/7</h6>
                    <p className='description'>Instant access to Contact</p>
                </div>
                <div className="col-3 card-container">
                    <Image className=""
                        src={"/images/feature/Icon3.png"}
                        alt="First slide"
                        width={50}
                        height={50}
                    />
                    <h6 className='feature-heading'>100% Sucure Payment</h6>
                    <p className='description'>We ensure your money is save</p>
                </div>
                <div className="col-3 card-container">
                    <Image className=""
                        src={"/images/feature/Icon4.png"}
                        alt="First slide"
                        width={50}
                        height={50}
                    />
                    <h6 className='feature-heading'>Money-Back Guarantee</h6>
                    <p className='description'>30 days money-back</p>
                </div>
            </div>
        </div>
    )
}

export default index