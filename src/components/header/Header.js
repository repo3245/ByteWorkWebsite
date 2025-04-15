import React, { useState } from "react";
import "./header.css";
// import { Icon, Icon-Large } from 'lucide-react';

const Header = () => {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <div className="frame">
            <div className="group">
                <div className="rectangle1"></div>
                <div className="rectangle6"></div>
                <div className="rectangle5"></div>
                <div className="rectangle4"></div>
                <div className="text" style={{ left: '511px' }}>Sign Up</div>
                <div className="text" style={{ left: '371px' }}>Contact</div>
                <div className="text" style={{ left: '301px' }}>About Us</div>
                <div className="text" style={{ left: '441px' }}>Features</div>
                <div className="ellipse2"></div>
                <div className="title">Unlock Opportunities with Crypto-Backed Micro-Tasks</div>
                <div className="description">ByteWork connects freelancers and clients with seamless payments using cryptocurrency.</div>
                <div className="logo">ByteWork</div>
                {/* <Icon className="icon" /> */}
                <div className="google-play"></div>
                <div className="app-store"></div>
                {/* <Icon-Large className="icon-large" /> */}
                <div className="ellipse1"></div>
            </div>
            <div className="ellipse54"></div>
            <div className="ellipse53"></div>
            <div className="mockup"></div>
        </div>
    );
};

export default Header;