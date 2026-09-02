import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Sidebar() {
    const { isAuthenticated } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

  return (
      <aside
        className={`hidden md:block w-64 shrink-0 p-5  ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          
          {isAuthenticated && <h2 className="text-xl font-bold mb-8">Welcome User 👋</h2>}
          

      <nav className="flex flex-col gap-4">
        <a href="#" className="p-2 rounded hover:bg-blue-500 hover:text-white transition">Dashboard</a>
        <a href="#" className="p-2 rounded hover:bg-blue-500 hover:text-white transition">Products</a>
        <a href="#" className="p-2 rounded hover:bg-blue-500 hover:text-white transition">Profile</a>
      </nav>
    </aside>
  );
}

export default Sidebar;