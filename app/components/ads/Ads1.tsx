import React from 'react'
import AdsCard1 from "./adsCard1"
import { AdsType } from '@/app/utils/type'
import "./index.css"

type Props = {
    data:AdsType[]
}

function index({data }: Props) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className='col-md-4'>
                        <AdsCard1
                            {...item}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default index