import React from 'react';
export default function HumididtyAlert({humidity}){
    if (humidity > 60) {
        return (
            <div className="humidity-alert">
                <p>Warning: High humidity detected. It's best to stay indoors.</p>
            </div>
        );
    } else {
        return null;
    }
}