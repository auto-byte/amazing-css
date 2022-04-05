import React from 'react'
import './index.scss'

const Particles = props => {
    const { amount } = props;
    return (
        <>
            {
                Array(amount).fill(0).map((_, i) => {
                    return <div className="particle" key={i} />
                })
            }
        </>
    )
}

export default function ParticleBurst() {
    return (
        <div className="particle-burst">
            <Particles amount={500} />
        </div>
    )
}
