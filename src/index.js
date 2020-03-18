import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import _ from 'lodash';
import faker from 'faker';

const source = _.times(300, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

ReactDOM.render(<App source={source}/>, document.getElementById('root'));

serviceWorker.unregister();
