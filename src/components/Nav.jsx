import { Link } from 'react-router-dom';
import mmcLogo from '../assets/MMC.svg';
import './styles/nav.css';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px', margin: '5px' };

    return (
        <nav className="main-header-menu">
            <h1>MMC</h1>
            <a href="https://www.mullenconsulting.biz" target="_blank" rel="noreferrer">
                <img src={mmcLogo} className="logo" alt="MMC logo" />
            </a>
            <section
                style ={{
                    display: 'flex',
                    fontFamily: 'helvetica',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div style={linkStyle}>
                    <Link to="/">About Me</Link>
                </div>
                <div style={linkStyle}>
                    <Link to="/portfolio">Portfolio</Link>
                </div>
                <div style={linkStyle}>
                    <Link to="/contact">Contact</Link>
                </div>
                <div style={linkStyle}>
                    <a href="/">Resume</a>
                </div>
            </section>
        </nav>
    );
}

               


        