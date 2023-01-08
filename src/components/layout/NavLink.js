import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLocation } from '@reach/router';

const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname == to;
    const className = isActive ? 'font-semibold border-primary-300' : 'border-transparent';
    
    return (
        <Link
            to={to}
            className={`tracking-wide text-lg lg:text-base block mr-5 text-navbar hover:font-semibold lg:inline-block lg:my-0 uppercase my-4`}
        >
            <span className={`border-b-4 hover:border-primary-300 pb-1 ${className}`}>{children}</span>
        </Link>
    );
}

export default NavLink;