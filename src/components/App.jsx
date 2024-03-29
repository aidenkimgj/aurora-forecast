import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbInstance';
import Footer from './Footer';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currLocation, setCurrLocation] = useState({
    lat: '',
    lng: '',
  });

  const currentLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        const {
          coords: { latitude, longitude },
        } = position;
        setCurrLocation({ lat: latitude, lng: longitude });
      });
    } catch (error) {
      alert("Can't find your location!");
    }
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    currentLocation();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: '#020101' }}>
        {init ? (
          <AppRouter isLoggedIn={isLoggedIn} location={currLocation} />
        ) : (
          'Initializing....'
        )}
        <Footer />
      </div>
    </>
  );
};

export default App;
