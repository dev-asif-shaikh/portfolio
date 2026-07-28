import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
    const { theme } = useTheme();
    const [puneTime, setPuneTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setPuneTime(now.toLocaleTimeString('en-IN', options));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer
            className="border-top py-4 mt-auto"
            style={{
                backgroundColor: theme === 'dark' ? '#1c1f26' : '#ffffff',
                borderColor: theme === 'dark' ? '#343a46' : '#dee2e6'
            }}
        >
            <div className="container-wide d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">

                {/* Left: Location & Live Time */}
                <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                    <span className="fw-semibold text-theme-title small">Pune, Maharashtra</span>
                    <span className="text-theme-muted small d-none d-sm-inline">•</span>
                    <span className="font-monospace text-react-cyan small fw-bold">
                        IST: {puneTime || '00:00:00 AM'}
                    </span>
                </div>

                <div className="text-theme-muted small fst-italic">
                    "[ ] == ![ ] evaluates to true."
                </div>

                <div className="text-theme-muted small">
                    © {new Date().getFullYear()} Asif Raza Shaikh
                </div>

            </div>
        </footer>
    );
}

export default Footer;