import "../App.css"
import { useNavigate } from 'react-router-dom'
export const DataCard = ({ product }) => {
const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-400 rounded-lg justify-center align-center">
            <div className="flex justify-center align-center">
                <img src={product.images[0]} alt={product.title} className="w-20 h-20" />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-center">{product.title}</h2>
                <p className="text-gray-700 text-center">{product.description}</p>
                <p className="text-gray-700 text-center">₹{product.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
            </div>
        </div>
    )
}