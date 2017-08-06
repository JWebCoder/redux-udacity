import React from 'react';
import {render} from 'react-dom';

// Router
import {HashRouter as Router} from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';
import configureStore from './store';

// Styles
import './index.css';

// Container
import Container from './Container';

//import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={configureStore()}>
    <Router>
      <Container/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker()
