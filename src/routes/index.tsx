import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageExample from '../pages/PageExample';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PageExample} />
  </Switch>
);

export default Routes;
