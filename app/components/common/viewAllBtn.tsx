import Image from 'next/image'
import React from 'react'

type Props = {}

export default function viewAllBtn({ }: Props) {
    return (
        <div>
            <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-primary)', marginRight:5, cursor:'pointer' }}>View All</span>
            <Image
                src={"/images/icon/arrow_right.svg"}
                alt="click here"
                width={15}
                height={12}
            />
        </div>
    )
}