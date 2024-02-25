import React from 'react'
import SectionLayout from '../section'
import AdsCard2 from "./addCard2"
import "./index.css"
type Props = {}

function index({ }: Props) {
    return (
        <SectionLayout
            heading=''
        >
            <AdsCard2
                thumbnail='/images/ads/ad5.png'
            />
        </SectionLayout>
    )
}

export default index