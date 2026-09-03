

import { useState, useContext } from 'react'
import { DataContext } from '../Context/DataContext.jsx'
import "../App.css"

export const NavBar = () => {

    const {filterByCategory, sortByPrice } = useContext(DataContext)

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100">

            <h1 className="text-2xl font-bold">Product List</h1>
            <div className="flex gap-4">
             
    <select
    className="bg-gray-200 border border-gray-400 text-gray-700 py-2 px-4 rounded-lg"
    onChange={(e) => filterByCategory(e.target.value)}
                >
                    
    <option value="all">All Categories</option>
    <option value="beauty">Beauty</option>
    <option value="fragrances">Fragrances</option>
    <option value="furniture">Furniture</option>
    <option value="groceries">Groceries</option>

  </select>

     <select
     className="bg-gray-200 border border-gray-400 text-gray-700 py-2 px-4 rounded-lg"
    onChange={(e) => sortByPrice(e.target.value)}
                >
            <option value="">Default</option>
             <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
     </select>
                
 </div>
        </div>
    )
}