
"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="page-nav">
        <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/skills">SKILLS</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
        </div>
        <div className="footer-bottom">
          <p>2024, Designed by Bisma Naeem. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}