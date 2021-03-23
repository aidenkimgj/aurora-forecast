import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import BestLocations from '../routes/BestLocations';
import AuroraMap from '../routes/AuroraMap';
import Observatory from '../routes/Observatory';
import Header from './Header';
import Navigation from './Navigation';

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
                component={withProps(Home, { position: location })}
              />
              <Route path="/bestlocations" exact component={BestLocations} />
              <Route
                path="/auroramap"
                exact
                component={withProps(AuroraMap, { center: location })}
              />
              <Route path="/observatory" exact component={Observatory} />
            </>
          ) : (
            <>
              <Route path="/" exact component={Auth} />
              <Route path="/bestlocations" exact component={Auth} />
              <Route path="/auroramap" exact component={Auth} />
              <Route path="/observatory" exact component={Auth} />
            </>
          )}
        </Switch>
      </Container>
    </>
  );
};

export default AppRouter;
