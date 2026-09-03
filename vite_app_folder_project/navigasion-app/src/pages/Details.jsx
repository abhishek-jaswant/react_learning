
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Details = () => {
    const { id } = useParams();
    const[detailsData,setDetailsData]=useState({data:null,loading:false,error:null});

    useEffect(() => {
        console.log(id);
        // fetch data from the API
        const fetchData = async () => {
            try {
                setDetailsData({ data: null, loading: true, error: null });
                const response = await axios.get(`https://dummyjson.com/posts/${id}`);
                const data = await response.data;
                setDetailsData({ data, loading: false, error: null });
            } catch (error) {
                console.error("Error fetching details:", error.message);
                setDetailsData({ data: null, loading: false, error: error.message });
            }
        };
        fetchData();
     },[id]);
  return (
      <div className="flex flex-col gap-4 p-4">
          <h1 className="text-4xl font-bold">Details</h1>
          <p className="text-gray-500">
            This is the details page of the application. You can find all the
            information about the data here.
          </p>
          {detailsData.loading && <p>Loading...</p>}
          {detailsData.error && <p>Error: {detailsData.error}</p>}
          {detailsData.data && (
              <div className="flex flex-col gap-4 p-4">
                  <h2>{detailsData.data.title}</h2>
                  <p>{detailsData.data.body}</p>
                  <p>Author: {detailsData.data.author}</p>
                  <p>Tags: {detailsData.data.tags.join(", ")}</p>
                  <p>Views: {detailsData.data.views}</p>
                  <p>Likes: {detailsData.data.reactions.likes}</p>
                  <p>Dislikes: {detailsData.data.reactions.dislikes}</p>
              <Link  to="/"  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
             </Link>
              </div>
          )}
        </div>
    
  );
};