import Image from 'next/image'
import { FeatureType } from '@/app/utils/type'
import "./index.css"

type Props = {
    data: FeatureType[]
}

function index({ data }: Props) {
    return (
        <div className='feature-container container'>
            <div className='row line-row'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="col-3 card-container">
                                <Image className=""
                                    src={`${item.thumbnail}`}
                                    alt="First slide"
                                    width={50}
                                    height={50}
                                />
                                <h6 className='feature-heading'>{item.heading}</h6>
                                <p className='description'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default index