import React, { ReactNode } from 'react';
import "./index.css"

type LayoutProps = {
    children: ReactNode;
    heading: string
};

const SectionLayout: React.FC<LayoutProps> = ({ children, heading }) => {
    return (
        <section className='row'>
            <h3 className="layout-heading">{heading}</h3>
            {children}
        </section>

    );
}


export default SectionLayout