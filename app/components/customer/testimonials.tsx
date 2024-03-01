/* eslint-disable @next/next/no-img-element */
import SectionLayout from "../section"
import "./index.css"
type Props = {}

function index({ }: Props) {
  return (
    <SectionLayout
      isViewAll={false}
      heading="What Our Customer Says"
    >
      <div className="col-md-4">
        <img src='/images/testimonials/Testimonial1.png'
          alt="customer"
          className='customer-image'
        />
      </div>
      <div className="col-md-4">
        <img src='/images/testimonials/Testimonial1.png'
          alt="customer"
          className='customer-image'
        />
      </div>
      <div className="col-md-4">
        <img src='/images/testimonials/Testimonial1.png'
          alt="customer"
          className='customer-image'
        />
      </div>

    </SectionLayout>
  )
}

export default index