import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import BestLocations from '../routes/BestLocations';
import AuroraMap from '../routes/AuroraMap';
import Gallery from '../routes/Gallery';
import Header from './Header';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Container id="main-body">
      <Router>
        <Header />
        <Switch>
          {isLoggedIn ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={Auth} />
          )}
          <Route path="/bestlocations" exact component={BestLocations} />
          <Route path="/auroramap" exact component={AuroraMap} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </Router>
    </Container>
  );
};

export default AppRouter;
