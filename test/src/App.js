import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page1Connect from './container/Page1Connect';
import Page2Connect from './container/Page2Connect';
import Page3Connect from './container/Page3Connect';
import Page4Connect from './container/Page4Connect';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Page1Connect} />
          <Route exact path="/page2" component={Page2Connect} />
          <Route exact path="/page3" component={Page3Connect} />
          <Route exact path="/page4" component={Page4Connect} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
