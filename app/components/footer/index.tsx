// components/Footer.js

import Image from "next/image";

const Footer = () => {
    return (
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <Image
                    src={"/images/header/Logo.svg"}
                    alt='logo'
                    width={183}
                    height={40}
                />
              {/* <img src="/your-logo.png" alt="Your Logo" className="img-fluid" /> */}
            </div>
            <div className="col-md-3">
              <h5>Section 1</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="#">Subsection 1.1</a></li>
                <li><a className="link-secondary" href="#">Subsection 1.2</a></li>
                <li><a className="link-secondary" href="#">Subsection 1.3</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Section 2</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="#">Subsection 2.1</a></li>
                <li><a className="link-secondary" href="#">Subsection 2.2</a></li>
                <li><a className="link-secondary" href="#">Subsection 2.3</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Section 3</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="#">Subsection 3.1</a></li>
                <li><a className="link-secondary" href="#">Subsection 3.2</a></li>
                <li><a className="link-secondary" href="#">Subsection 3.3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  