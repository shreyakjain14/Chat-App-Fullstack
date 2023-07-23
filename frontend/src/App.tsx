import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./utils/store";

// Login
// Dashboard
//  Header
//  Posts
// Contact

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  );
}

export default App;
