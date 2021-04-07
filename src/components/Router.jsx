import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forecast from '../routes/Forecast';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import BestLocations from '../routes/BestLocations';
import AuroraMap from '../routes/AuroraMap';
import AuroraMaxLive from '../routes/AuroraMaxLive';
import Header from './Header';
import Navigation from './Navigation';
import AuroraMaxReplay from '../routes/AuroraMaxReplay';

const AppRouter = ({ isLoggedIn, location }) => {
  const withProps = (Component, props) => {
    return matchProps => {
      return <Component {...props} {...matchProps} />;
    };
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Header />
      <Container id="main-body">
        <Switch>
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                exact
                component={withProps(Forecast, { position: location })}
              />
              <Route
                path="/bestlocations"
                exact
                component={withProps(BestLocations, { center: location })}
              />
              <Route
                path="/auroramap"
                exact
                component={withProps(AuroraMap, { center: location })}
              />
              <Route path="/live" exact component={AuroraMaxLive} />
              <Route path="/replay" exact component={AuroraMaxReplay} />
            </>
          ) : (
            <>
              <Route path="*" exact component={Auth} />
            </>
          )}
        </Switch>
      </Container>
    </>
  );
};

export default AppRouter;
