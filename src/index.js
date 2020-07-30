import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import CadastroVideo from './Pages/CadastroVideo/index';
import CadastroCategoria from './Pages/CadastroCategoria/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <div>404 Page Not Found</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);