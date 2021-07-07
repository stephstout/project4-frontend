import React from 'react';
import { BiUser, BiSearch, BiPlus } from 'react-icons/bi'
import { Link, Router } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h1>steph codes and stuff</h1>
            </Link>
            <ul>
                <Link to="/signup">
                <li>
                    <BiUser size="2em"/>
                </li>
                </Link>
                <li>
                    <BiSearch size="2em"/>
                </li>
                <Link to="/createpost">
                <li>
                    <BiPlus size="2em"/>
                </li>
                </Link>
            </ul>
        </div>
    );
};

export default Nav;