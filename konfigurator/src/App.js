import React, { useState } from 'react';
import styles from './App.module.scss';
// import Filters from './components/Filters/Filters';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/Context';
<<<<<<< HEAD
import Header from "./components/Header";
import Dashboard from './components/Dashboard';
=======
import Header from "./components/Header/Header";
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865

function App() {
  // const [selectedMotherboard] = useState(Motherboards);
  // const [setMotherboardsToDisplay] = useState(selectedMotherboard);
  const { loggedInUser } = useAuth();

  return (
    <AuthProvider>
      <div>
        <div className={styles.appWrapper}>
          <ResponsiveAppBar
            loggedInUser={loggedInUser}
          />
          <Header />
<<<<<<< HEAD
          {/* <Filters
=======
          <Filters
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865
            Motherboards={Motherboards}
            sendfilteredProductsToAppComponent={setMotherboardsToDisplay}
          /> */}
          <div className={styles.columnsWrapper}>
            <Dashboard />
          </div>
        </div >
        <footer id="contactSection">
          <Footer />
        </footer>
      </div >
    </AuthProvider>
  );
}

export default App;
