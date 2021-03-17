import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import BestLocations from '../routes/BestLocations';
import AuroraMap from '../routes/AuroraMap';
import Gallery from '../routes/Gallery';
import Header from './Header';
import Navigation from './Navigation';

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn, '로그인 정보');

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Header />
      <Container id="main-body">
        <Switch>
          {isLoggedIn ? (
            <>
              <Route path="/" exact component={Home} />
              <Route path="/bestlocations" exact component={BestLocations} />
              <Route path="/auroramap" exact component={AuroraMap} />
              <Route path="/gallery" exact component={Gallery} />
            </>
          ) : (
            <>
              <Route path="/" exact component={Auth} />
              <Route path="/bestlocations" exact component={Auth} />
              <Route path="/auroramap" exact component={Auth} />
              <Route path="/gallery" exact component={Auth} />
            </>
          )}
        </Switch>
      </Container>
    </>
  );
};

export default AppRouter;
