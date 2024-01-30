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
import ShowPage from './components/showPage/showPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // errorElement: <Page404 />,
  },
  {
    path: "/showPage",
    element: <ShowPage />,

  },
  {
    path: "/MainPage",
    element: <MainPage />,

  },
  {
    path: "/configurator",
    element: <App />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,

  },
  {
    path: "/UserPage",
    element: <UserPage />,

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