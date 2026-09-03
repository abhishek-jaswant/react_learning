import { useContext } from "react";
import { Context } from "../Context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { data, search, setSearch } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-4">

      {/* Search */}
      <div className="w-full p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="border-2 border-gray-500 rounded-md p-2 w-full max-w-md shadow-sm text-black"
        />
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 p-4 shadow-md bg-blue-800 rounded-md"
          >
            <h2 className="text-2xl font-bold">
              {item.title}
            </h2>

            <p>{item.body}</p>

            <button
              onClick={() => navigate(`/details/${item.id}`)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Details
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};