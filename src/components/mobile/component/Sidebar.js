import React, { useState } from "react";
import { Link } from "react-router-dom";


function Sidebar({toggle}) {
  
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;