import React, { useState, useEffect } from 'react';
import './index.scss';

const LetterSpan = (props) => {
    return (
        props.letterDelay.map(item => {
            return (
                <span
                    key={item.letter}
                    style={{ animationDelay: item.delay + 's' }}>
                    {item.letter}
                </span>
            )
        })
    )
}

export default function ShrinkingLoading() {
    const [text] = useState('loading');
    let [letterDelay, setLetterDelay] = useState([]);

    useEffect(() => {
        setLetterDelay(calcDelay(text.split('')));
    }, [text]);

    const calcDelay = (letters) => {
        let letterDelay = [];

        letters.forEach((letter, index) => {
            letterDelay.push({ letter: letter, delay: (index / 10) });
        })

        return letterDelay;
    }

    return (
        <div className="shrinking-loading">
            <div className="loading">
                <LetterSpan letterDelay={letterDelay} />
            </div>
        </div>
    )
}
