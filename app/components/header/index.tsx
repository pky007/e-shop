import { HeaderRightIcons, NavLinks } from '@/app/utils/json'
import Image from 'next/image'
import React from 'react'
import "./index.css"
import Link from 'next/link'

type Props = {}

function index({ }: Props) {
    return (
        <header className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-container">
                <Image
                    src={"/images/header/Logo.svg"}
                    alt='logo'
                    width={183}
                    height={40}
                />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className='nav'>
                            {
                                NavLinks.map((item, index) => {
                                    return (<li key={index} className='nav-item'>
                                        <Link href={item.to} className="nav-link">{item.name}</Link>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='icon-right-container'>
                    <Image
                        src={"/images/header/PhoneCall1.png"}
                        alt='PhoneCall'
                        width={34}
                        height={34}
                    />
                    <span style={{ paddingRight: 50 }}>(219) 555-0114</span>
                    <Image
                        src={"/images/header/Search.png"}
                        alt='logo'
                        width={32}
                        height={32}
                        className='icon-right-img'
                    />
                    <Image
                        src={"/images/header/Heart.png"}
                        alt='logo'
                        width={32}
                        height={32}
                        className='icon-right-img'
                    />
                    <Image
                        src={"/images/header/Bag.png"}
                        alt='logo'
                        width={32}
                        height={32}
                        className='icon-right-img'
                    />
                    <Image
                        src={"/images/header/user_31.png"}
                        alt='logo'
                        width={32}
                        height={32}
                        className='icon-right-img'
                    />
                </div>
            </nav>
        </header>
    )
}

export default index