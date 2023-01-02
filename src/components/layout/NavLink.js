import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLocation } from '@reach/router';

const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname.includes(to);
    const className = isActive ? 'text-secondary font-semibold' : 'text-white';
    
    return (
        <Link
            to={to}
            className={`tracking-wide text-lg lg:text-base block mr-4 text-navbar lg:inline-block lg:my-0 hover:text-navbar uppercase my-2`}
            activeClassName="text-secondary font-semibold"
        >
            <span className="border-b-4 border-transparent pb-1 hover:border-primary-300">{children}</span>
        </Link>
    );
}

export default NavLink;