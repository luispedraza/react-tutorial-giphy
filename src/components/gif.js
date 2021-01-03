import React from 'react';

export default function Gif({title, id, url}) {
    return (
        <div className="gif">
        <h4>{title}</h4>
        <img src={url} alt={title} />
        </div>
        );
    }