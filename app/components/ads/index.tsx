import React from 'react'
import SectionLayout from '../section'
import AdsCard1 from "./addCard1"
import { Ads } from '@/app/utils/json'
import "./index.css"
type Props = {}

function index({ }: Props) {
    return (
        <SectionLayout
            heading=''
        >
            {Ads?.map((item, index) => {
                return (
                    <div key={index} className='col-md-4'>
                        <AdsCard1

                            {...item}
                        />
                    </div>
                )
            })}
        </SectionLayout>
    )
}

export default index