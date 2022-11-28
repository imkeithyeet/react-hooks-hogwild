import React from 'react';
import HogItem from './HogItem'

function HogTiles ({hogs}) {
const hogItem= hogs.map(hog=>{
    return <HogTile keys={hog.name} image={hog.image} name={hog.name} />
    

})

    return (
        <div>
            <ul className="ui grid container">{hogItem}</ul>
        </div>
    );
}

export default HogTiles;


