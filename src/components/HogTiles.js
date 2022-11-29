import React from 'react';
import HogItem from './HogItem'
import {useState} from "react"

function HogTiles ({hogs}) {
    // const {showGreased, setShowGreased}=useState(null)



    // const[showGreased, handleShowGreased]=useState("ALL")
    

// const handleFilter=(e)=>{
//     console.log(e.target)
//     setShowGreased(e.target.value)
    
    
// }

const mappedHogs = hogs.map(hog=>{
    return <HogItem
    name={hog.name}
    specialty={hog.specialty}
    weightMedal={hog['highest medal achieved']}
    image={hog.image}
    greased={hog.greased} 
    weight={hog.weight}
    />
})

    return (
        <div>
            <ul className="ui grid container">{mappedHogs}</ul>
        </div>
    );
}

export default HogTiles;


