import React from 'react'

export default function Progress({ page }) {
    const per = ((page - 1) / 3) * 100;

    return (
        <div>
            <div className="progress">
                <div
                    className="progress-bar" style={{ width: `${per}%` }}>
                </div>
            </div>
        </div>
    );
}
