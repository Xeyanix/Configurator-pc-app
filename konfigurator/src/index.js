// import React from 'react';
// import ReactDOM from "react-dom";
// import './index.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import LoginPage from "./components/LoginPage";
// import ConfigurePage from "./components/ConfigurePage";
// import UserPage from "./components/UserPage";
// import store from "./redux/store";
// import { AuthProvider } from './context/Context';
// import MainPage from './components/MainPage';
// import ShowPage from './components/ShowPage';
// import Contact from './components/Contact';
// import About from './components/About';
// import Offer from './components/Offer';
// import Legal from './components/Legal';


// import { Provider } from "react-redux";
// // import { HashRouter, Routes, Route } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     // errorElement: <Page404 />,
//   },
//   {
//     path: "/ShowPage",
//     element: <ShowPage />,
//   },
//   {
//     path: "/ConfigurePage",
//     element: <ConfigurePage />,
//   },
//   {
//     path: "/LoginPage",
//     element: <LoginPage />,
//   },
//   {
//     path: "/configurator",
//     element: <App />,
//   },
//   {
//     path: "/UserPage",
//     element: <UserPage />,
//   },
//   {
//     path: "/Contact",
//     element: <Contact />,
//   },
//   {
//     path: "/About",
//     element: <About />,
//   },
//   {
//     path: "/Offer",
//     element: <Offer />,
//   },
//   {
//     path: "/Legal",
//     element: <Legal />,
//   },
// ]);

// ReactDOM.render(
//   <Provider store={store}>
//     <AuthProvider>
//       <React.StrictMode>
//         <RouterProvider router={router} />
//       </React.StrictMode>
//     </AuthProvider>
//   </Provider>,
//   document.getElementById("root")

// );

// reportWebVitals();





import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/LoginPage';
import ConfigurePage from './components/ConfigurePage';
import UserPage from './components/UserPage';
import MainPage from './components/MainPage';
import ShowPage from './components/ShowPage';
import Contact from './components/Contact';
import About from './components/About';
import Offer from './components/Offer';
import Legal from './components/Legal';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/Context';

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ShowPage" element={<ShowPage />} />
            <Route path="/ConfigurePage" element={<ConfigurePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/configurator" element={<App />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Offer" element={<Offer />} />
            <Route path="/Legal" element={<Legal />} />
            {/* jeśli chcesz, możesz dodać tu <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
