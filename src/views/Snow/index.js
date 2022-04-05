import React from 'react'
import './index.scss';

const SnowItem = props => {
    const { amount } = props;
    return (
        <>
            {
                Array(amount).fill(0).map((_, i) => {
                    return <div className="snow" key={i} />
                })
            }
        </>
    )
}
export default function Snow() {
    return (
        <div className="snow-container">
            <SnowItem amount={200} />
        </div>
    )
}
