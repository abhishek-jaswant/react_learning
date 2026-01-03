import { createRoot } from "react-dom/client";
 import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { DataContextProvider } from "./context/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
