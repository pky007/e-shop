/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    rating?: number
}

export default function index({ rating=0 }: Props) {
    console.log("fdsfds",)
    return (
        <div>
            {
                [...Array(rating)].map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={"/images/products/star/star1.png"}
                            alt="ok"
                        />
                    )
                })
            }
            {
                [...Array(5 - rating)].map((item, index) => {
                    return (
                        <img
                            key={index}
                            src="/images/products/star/star5.png"
                            alt="ok"
                        />
                    )
                })
            }

        </div>
    )
}