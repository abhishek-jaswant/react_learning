import About from "../pages/About";
import { Home } from "../pages/Home";
import { Link } from "react-router-dom";


import  "../App.css"

export const Navbar = () => {
 

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
         <h2>My Website</h2>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
      
    </div>
  );
};