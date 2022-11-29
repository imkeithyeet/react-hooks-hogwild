import React from 'react';

const Filter = ({showGreased,setShowGreased,setSortBy, sortBy}) => {

    // function handleChangeSortBy(event){
    //     onChangeSortBy(event.target.value)
    // }
    const handleToggleGreased=()=>{
        setShowGreased(!showGreased)
    }
    const handleSortby=(e)=>{
        setSortBy(e.target.value)
    }
    return (
        <div>
            <div className='ui item'>
            <select className="ui selection dropdown" onChange={(handleSortby)}>
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
            </div>
            <strong>Filter By Grease</strong>
            <input
			className="ui toggle checkbox"
			onChange={handleToggleGreased}
		    type="checkbox"
			/>
        </div>
    );
}

export default Filter;
