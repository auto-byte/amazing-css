import React, { useState } from 'react';
import './index.scss';

const LetterSpan = (props) => {
    return (
        props.letterDelay?.map((item, index) => {
            return (
                <span
                    key={index}
                    style={{ animationDelay: item.delay + 'ms' }}>
                    {item.letter}
                </span>
            )
        })
    )
}

export default function GleamingHeading() {
    let [text] = useState('fushigi no monogatari');

    function calcDelay(letters) {
        let letterDelay = [];
        letters.forEach((letter, index) => {
            letterDelay.push({ letter: letter, delay: random(1, 1000) })
        });
        return letterDelay;
    }

    function random(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    return (
        <div className="gleaming-heading">
            <div className="letters">
                <LetterSpan letterDelay={calcDelay(text.split(''))} />
            </div>
        </div>
    )
}
