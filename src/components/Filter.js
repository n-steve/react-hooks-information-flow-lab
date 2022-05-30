import React from "react"


function Filter({onCatergoryChange}){
    return (
        <select name="filter" onChange={onCatergoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    );
};

export default Filter;