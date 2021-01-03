import React from 'react';
import Gif from './gif';

export default function ListOfGifs({gifs = []}) {
    return <div className="list-of-gifs">
    {
        gifs.map(({id, title, url}) => <Gif title={title} url={url} id={id} key={id} />)
    }
    </div>
    
}