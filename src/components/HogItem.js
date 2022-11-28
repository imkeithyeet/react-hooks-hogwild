import React from 'react';

function HogItem ({name, image}) {
    return (
        <li className="ui eight wide column pigTile">
                 <figure>
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                </figure>
            </li>
    )
}

export default HogItem;
