import React, { useState } from "react";
import './SideBar.css';
import Logo from '../../imgs/logo.png';
import { UilEstate, UilClipboardAlt, UilPackage, UilChart, UilUsersAlt, UilSignOutAlt } from '@iconscout/react-unicons'

const SideBar = () => {

    const [selected, setSelected] = useState(0);

    const menutItems = [
        {
            key: 1,
            icon: UilEstate,
            heading: 'Dashboard'
        },
        {
            key: 2,
            icon: UilClipboardAlt,
            heading: 'Orders'
        },
        {
            key: 3,
            icon: UilUsersAlt,
            heading: 'Customers'
        },
        {

            key: 4,
            icon: UilPackage,
            heading: 'Products'
        },
        {
            key: 5,
            icon: UilChart,
            heading: 'Analytics'
        },
    ];

    return (
        <div className="SideBar">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/* Menu */}
            <div className="menu">
                {menutItems.map((item, index) => {
                    return (<div className={selected === index ? "menuItem active" : "menuItem"}
                        key={index}
                        onClick={() => {
                            setSelected(index);
                        }}
                    >
                        <div>
                            < item.icon />
                        </div>
                        <span>{item.heading}</span>
                    </div>)
                }
                )}
                <div className="menuItem">
                    <div>
                        <UilSignOutAlt />
                    </div>

                </div>

            </div>
        </div>

    );

}

export default SideBar;