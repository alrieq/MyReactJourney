import React from "react";
function Navbar() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer"><small><p>&copy;2023 Copyright ELBAIK Food Systems Company S.A. ® All rights reserved ALBAIK®, logos and Nazeeh & Wartan are registered trademarks of the ELBAIK Food Systems Company S.A.</p></small></footer>
    )
}

function Content() {
    return (
        <div className="contant">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
            
        </div>
    )
}

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="logo192.png" alt="reactPic" className="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;