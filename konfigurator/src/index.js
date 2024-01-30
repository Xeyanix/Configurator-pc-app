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
import { AuthProvider } from './context/Context';
import LandingPage from './components/Welcome/Welcome';
import ShowPage from './components/ShowPage/ShowPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/ShowPage", //tu bedzie CV
    element: <ShowPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/MainPage",
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
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")

);

reportWebVitals();