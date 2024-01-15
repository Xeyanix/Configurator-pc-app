import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./components/LoginPage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/configuratorPC",
    element: <App />,
    children: [

    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
