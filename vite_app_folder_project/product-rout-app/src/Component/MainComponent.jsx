
import { useContext } from 'react'

import { DataContext } from '../Context/DataContext.jsx'
import { DataCard } from './DataCard.jsx'
import "../App.css"

export const MainComponent = () => {

    const { data } = useContext(DataContext)

    return (
        <div className=" p-4">

               {data.loading && <h1 className="text-xl font-bold text-center">Loading...</h1>}
            {data.error && <h1 className="text-xl font-bold text-center text-red-500">{data.error}</h1>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.products.map((product) => (

                <div key={product.id} >
                   <DataCard product={product} />
                </div>
            ))}
            </div>
        </div>
    )
}