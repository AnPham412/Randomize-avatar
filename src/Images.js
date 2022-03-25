import React from 'react';
import "./character";

export default function Images() {
    let src ="./character/";
    let number = Math.floor(Math.random() * src.name.length);
    let randomImage = number.toString() + '.png';
    let randomImageSource =  src.name + randomImage;
    return (
        [{randomImage}, {randomImageSource}]
    );
}

