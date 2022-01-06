import React, { useState } from 'react';

const Header = (props) => {

    // properties
    // auth: boolean value of whether user has been authenticated
    
    const [auth, setAuth] = useState(false);

    let navbarContents, userSettings;

    if (auth) {
        navbarContents = [
            {
                value: "Home",
                link: "/dashboard",
                listKey: "liHome",
                anchorKey: "aHome"
            },
            {
                value: "Accounts",
                link: "/accounts",
                listKey: "liAccounts",
                anchorKey: "aAccounts"
            },
            {
                value: "Friends",
                link: "/friends",
                listKey: "liFriends",
                anchorKey: "aFriends"
            }
        ];

        userSettings =
            // padding to the right needed so that the dropdown doesn't increase the width of the page
            <li className="nav-item dropdown"  style={{"paddingRight": "10px"}}>
                <a className="nav-link active dropdown-toggle" href="#nogo" id="userSettingDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* User Icon */}
                    <i className="bi bi-person-circle" style={{"marginRight": "5px"}}></i>
                    User's Name
                </a>
                <ul className="dropdown-menu" aria-labelledby="userSettingDropdownLink">
                    {/* TODO: Actually create the endpoints for these */}
                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                    <li><a className="dropdown-item" href="/settings">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/signout">Sign Out</a></li>
                </ul>
            </li>
        
    } else {
        navbarContents = [
            {
                value: "Home",
                link: "/",
                listKey: "liHome",
                anchorKey: "aHome"
            }
        ]

        userSettings = <li></li>;
    }

    // Generate the navbar items
    const navLinks = navbarContents.map( (item) =>
        <li className="nav-item" key={ item.listKey }>
            <a className="nav-link active" key={ item.anchorKey } aria-current="page" href= { item.link }>{ item.value }</a>
        </li>
    );

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">Dollars Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            { navLinks }
                        </ul>
                        {/* Items on the right of navbar - notification & user settings */}
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item">
                                <i className="bi bi-bell-fill nav-link active"></i>
                            </li>
                            { userSettings }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;