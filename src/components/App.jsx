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
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude },
      } = position;
      setCurrLocation({ lat: latitude, lng: longitude });
    });
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
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} location={currLocation} />
      ) : (
        'Initializing....'
      )}
      <Footer />
    </>
  );
};

export default App;
