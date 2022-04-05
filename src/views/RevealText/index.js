import React from 'react';
import { useEffect, useState } from 'react';
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

export default function RevalText() {
    let [text] = useState("sword art online");
    let [letterDelay, setLetterDelay] = useState([]);

    useEffect(() => {
        setLetterDelay(calcDealy(text.split('')));
    }, [text]);

    function calcDealy(letters) {
        let delay = 0.3;
        let letterDaly = [];
        let middle = letters.filter(e => e !== " ").length / 2;
        letters.forEach((letter, i) => {
            letterDaly.push({ letter: letter, delay: delay + Math.abs(i - middle) * 0.1 })
        });
        return letterDaly;
    }

    return (
        <>
            <div className="reval-text">
                <div className="reveal"><LetterSpan letterDaly={letterDelay} /></div>
            </div>
        </>
    )
}
