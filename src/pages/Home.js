import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Devtools Page</h1>
            <p className="home-description">
                Find the best tools to assist you with your web development needs.
            </p>
            <div className="home-link-container">
                <Link to="/button-designer" className="home-link">
                    <div className="home-link-content">
                        <h2>CSS Button Designer</h2>
                        <p>Create custom CSS buttons with ease.</p>
                    </div>
                </Link>
                <Link to="/color-palette-generator" className="home-link">
                    <div className="home-link-content">
                        <h2>Color Palette Generator</h2>
                        <p>Generate beautiful color palettes for your designs.</p>
                    </div>
                </Link>
                <Link to="/react-snippets" className="home-link">
                    <div className="home-link-content">
                        <h2>React Snippets</h2>
                        <p>Useful React snippets for your react projects.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;