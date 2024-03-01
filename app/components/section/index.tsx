import React, { ReactNode } from 'react';
import "./index.css"
import ViewAllBtn from "../common/viewAllBtn"

type LayoutProps = {
    children: ReactNode;
    heading: string,
    isViewAll:boolean
};

const SectionLayout: React.FC<LayoutProps> = ({ children, heading, isViewAll = false }) => {
    return (
        <div className='container'>
            <section className='row'>
                <div className='section-heading-container'>
                    <h3 className="layout-heading">{heading}</h3>
                   {isViewAll && <ViewAllBtn />}
                </div>
                {children}
            </section>
        </div>

    );
}


export default SectionLayout