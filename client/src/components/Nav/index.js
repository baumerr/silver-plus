import React from 'react';

function Nav(props) {
    const { navLinks, currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul className='nav-links'>
                {navLinks.map(link => (
                    <li key={link}>
                        <h2
                        className={`nav-link ${currentPage === link && 'navActive'}`}
                        onClick={() => {
                            setCurrentPage(link)
                        }}>{link}</h2>
                    </li>
                ))};
            </ul>
        </nav>
    );
};

export default Nav;