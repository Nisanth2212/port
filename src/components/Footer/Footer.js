import React from 'react'
import './Footer.css'
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer >
        <p>© {currentYear} Nisanth G. All rights reserved.</p>
      </footer>
    );
}
