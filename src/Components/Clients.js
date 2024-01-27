import "./Clients.css";
import "../App.css";
import React, { useEffect } from 'react';

const Clients = () => {
    useEffect(() => {
        // This will be executed after the component is rendered
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logo-slider").appendChild(copy);
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div className="logo-slider">
            <div className="clients-content">
                <h1 className="client-head"><span>Clients</span> We Worked With</h1>
            </div>
            <div className="logos-slide">
                <img src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/client-logo-2.png" alt="client"/>
                <img src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/client-logo-2.png" alt="client"/>
                <img src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/client-logo-5.png" alt="client"/>
                <img src="https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/client-logo-4.png" alt="client"/>
            </div>
        </div>
    );
};

export default Clients;
