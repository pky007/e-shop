import React from 'react'
import SectionLayout from '../section'
import AdsCard1 from "./addCard1"
import AdsCard2 from "./addCard2"
import "./index.css"
type Props = {}

function index({ }: Props) {
    return (
        <SectionLayout
            heading=''
        >
            <AdsCard2
                thumbnail='/images/ads/ad4.png'
            />
        </SectionLayout>
    )
}

export default index