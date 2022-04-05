import React, { useEffect, useState } from 'react';
import './index.scss';

const LetterSpan = (props) => {
    return (
        <>
            {
                props.letterDaly.map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{ animationDelay: item.delay + 's' }}
                        >
                            {item.letter}
                        </span>
                    )
                })
            }
        </>
    )
}

export default function StairLoading() {
    let [text] = useState("loading");
    let [letterDelay, setLetterDelay] = useState([]);
    useEffect(() => {
        setLetterDelay(calcDelay(text.split('')));
    }, [text]);

    function calcDelay(letters) {
        let letterDaly = [];
        letters.forEach((letter, i) => {
            letterDaly.push({ letter: letter, delay: (i / 5) + 0.3 })
        });
        return letterDaly;
    }

    return (
        <>
            <div className="stair-loading">
                <div className="loading"><LetterSpan letterDaly={letterDelay} /></div>
            </div>
        </>
    )
}
