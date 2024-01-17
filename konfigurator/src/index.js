import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import UserPage from "./components/UserPage/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/configurator",
    element: <App />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/UserPage",
    element: <UserPage />,
    // errorElement: <Page404 />,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
    document.getElementById("root")

);

reportWebVitals();