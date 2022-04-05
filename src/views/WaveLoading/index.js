import React from 'react';
import './index.scss';

export default function StaggeredWaveLoading() {
    return (
        <>
            <div className="wave-loading">
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </>
    )
}
