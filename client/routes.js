import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/App';
import { Home } from './components/pages/Home';
import { Registration } from './components/pages/Registration';
import { Account } from './components/pages/Account';
import { Login } from './components/pages/Login';
import { Contribution } from './components/pages/Contribution';
import { Faq } from './components/pages/Faq';
import { Summary } from './components/pages/Summary';
import { Sale } from './components/pages/Sale';
import { NotFound } from './components/pages/NotFound';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='Aditus Token Sale' component={Home} />
    <Route path='registration' title='Aditus Token Sale - Registration' component={Registration} />
    <Route path='account' title='Aditus Token Sale - Account' component={Account} />
    <Route path='login' title='Aditus Token Sale - Login' component={Login} />
    <Route path='contribution' title='Aditus Token Sale - Contribution' component={Contribution} />
    <Route path='faq' title='Aditus Token Sale - FAQ' component={Faq} />
    <Route path='sale' title='Aditus Token Sale - Sale' component={Sale} />
    <Route path='summary' title='Aditus Token Sale - Summary' component={Summary} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
