import React from 'react'

import Ads1 from "@/app/components/ads/Ads1"
import SectionLayout from '@/app/components/section'
import { AdsData } from '@/app/utils/json'
import AdsCard2 from "@/app/components/ads/adsCard2"

type Props = {}

export function AdsSection1({ }: Props) {
    return (
        <SectionLayout
            heading=''
            isViewAll={false}
        >
            <Ads1 data={AdsData} />
        </SectionLayout>
    )
}

export function AdsSection2({ }: Props) {
    return (
        <div className='big-adCard mt-3 mb-3'>
            <AdsCard2
                thumbnail='/images/ads/ad4.png'
            />
        </div>
    )
}


export function AdsSection3({ }: Props) {
    return (
        <SectionLayout
            heading=''
            isViewAll={false}
        >
        <AdsCard2
        thumbnail='/images/ads/ad5.png'
    />
    </SectionLayout>
    )
}