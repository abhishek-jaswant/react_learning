import {  useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import "../App.css"
export const ProductDetails = () => {
    const { id } = useParams();
    const [state, setState] = useState({ Loading: true, error: "", product: null });
    console.log(id)
    useEffect(() => {
        const fetchProduct = async () => {
            setState({ Loading: true, error: "", product: null });
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                console.log(res.data)
                // DummyJSON single product endpoint directly object return karta hai (res.data)
                setState({ Loading: false, error: "", product: res.data });
            } catch (error) {
                console.log(error);
                setState({ Loading: false, error: error.message, product: null });
            }
        };
        fetchProduct();
    }, [id]);

    if (state.Loading) return <h1 className="p-6 text-xl font-semibold">Loading...</h1>;
    if (state.error) return <h1 className="p-6 text-xl text-red-500 font-semibold">{state.error}</h1>;
    if (!state.product) return null;

    const { product } = state;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8 gap-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                    <img 
                        src={product.thumbnail || product.images?.[0]} 
                        alt={product.title} 
                        className="w-full max-h-80 object-contain rounded-md" 
                    />
                     <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                Back to Home
            </Link>
                </div>

                {/* Main Details */}
                <div className="md:w-1/2 flex flex-col gap-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        {product.category} | {product.brand}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 text-sm">{product.description}</p>

                    <div className="flex items-center gap-4 my-2">
                        <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                        <span className="text-sm text-red-500 font-medium">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                            ⭐ {product.rating}
                        </span>
                        <span>Stock: {product.stock} items ({product.availabilityStatus})</span>
                    </div>

                    {/* Extra Specs */}
                    <div className="border-t pt-4 mt-2 text-sm text-gray-600 space-y-1">
                        <p><strong>SKU:</strong> {product.sku}</p>
                        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
                <div className="mt-8 border-t pt-6 gap-4">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
                    <div className="space-y-4">
                        {product.reviews.map((rev, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded border">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-semibold text-sm">{rev.reviewerName}</span>
                                    <span className="text-yellow-600 font-bold text-sm">⭐ {rev.rating}/5</span>
                                </div>
                                <p className="text-gray-700 text-sm">{rev.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
           
        </div>
    );
};