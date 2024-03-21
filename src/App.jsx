import Sidebar from "./Component/Sidebar/Sidebar";
import ProductPage from "./Component/ProductPage/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="container">
          <div className="sidebar-container inner-container_styles">
            <Sidebar />
          </div>
          <div className="productPage-container inner-container_styles">
            <ProductPage />
          </div>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
