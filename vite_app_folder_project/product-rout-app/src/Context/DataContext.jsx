


import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()



const DataContextProvider = ({ children }) => {

    const [data, setData] = useState({
        products: [],
        loading: false,
        error: "",
    })
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setData({ ...data, loading: true })
            try {
                const res = await axios.get('https://dummyjson.com/products')
                setAllProducts(res.data.products)
                setData(prev=>({...prev, products: res.data.products, loading: false, error: ""}))
                console.log(res.data.products)

            }
            catch (error) {
                setData({ ...data, loading: false, error: error.message })
            }
        }
        fetchData()
    }, [])

    const filterByCategory = (category) => {

        if (category === 'all') {
            
            setData({ ...data, products: allProducts })
            return
        }
       
            const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
         setData({ ...data, products: filteredProducts })
    

        
    }

    const sortByPrice = (order) => {
        if(order === ''){
            setData({ ...data, products: allProducts })
            console.log(data.products.length)
            return
        }
        const sortedProducts = data.products.sort((a, b) => {
            if (order === 'asc') {
                return a.price - b.price
            }
            else if(order === 'desc'){
                return b.price - a.price
            } 

        })
        setData({ ...data, products: sortedProducts })
    }

    return (
        <DataContext.Provider value={{data, filterByCategory, sortByPrice}}>
            {children}
        </DataContext.Provider>
    )
}
 
export default DataContextProvider