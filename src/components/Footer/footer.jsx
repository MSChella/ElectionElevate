import React from 'react';
import '../Footer/style.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-0 bg-light">
            <div className="footer">
                <span className="text-muted">
                    &copy; {new Date().getFullYear()} DigiIndia. @All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
