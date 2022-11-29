import {useState} from 'react';

function HogItem ({name, image, weight, greased,specialty, weightMedal}) {
    const[showDetails, setShowDetails]=useState(false)
    
    const handleClick=(e)=>{
        setShowDetails(prevState => !prevState);
    }
    return (
        <li className=" pigTile">
                 <figure>
                    <h1>{name}</h1>
                    <img 
                    src={image} 
                    alt={name} 
                    height="300" 
                    width="300" 
                    onClick={handleClick} 
                    />
                    {showDetails ? (
                        <div>
                            <p>
                               weight: {weight} lbs, highest medal achieved:{weightMedal},{specialty}, {greased ? "Greased" : "Not Greased"}
                            </p>
                        </div>
                    ) :null
                    } 
                </figure>
            </li>
    )
}

export default HogItem;
