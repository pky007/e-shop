/* eslint-disable @next/next/no-img-element */
import SectionLayout from "../section"
import "./index.css"
type Props = {}

function index({ }: Props) {
  return (
    <>
        <div className="col-md-6">
          <img src='/images/testimonials/customer.png'
            alt="customer"
            className='customer-image'
          />

        </div>
        <div className="col-md-6 center-container mt-5">
          <h3>100% Trusted
            Organic Food Store</h3>

          <ul>
            <li><h5>Healthy & natural food for lovers of healthy food.</h5>
              <p>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
            </li>
            <li><h5>Healthy & natural food for lovers of healthy food.</h5>
              <p>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
            </li>
          </ul>
        </div>
    </>
  )
}

export default index