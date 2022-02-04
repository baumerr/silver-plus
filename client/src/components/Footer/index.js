import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // <footer className="w-100 mt-auto bg-secondary p-4">
        <div className='container-footer'>
            <a href='https://insert-silver-plus-privacy-policy' className='footer-link' target='_blank' rel='noreferrer'>
            Silver Plus Privacy policy
            </a>
            <a href='https://insert-silver-plus-TOC' className='footer-link' target='_blank' rel='noreferrer'>
            Silver Plus Terms and Conditions
            </a>
        </div>
        // </footer>
    );
};

export default Footer;