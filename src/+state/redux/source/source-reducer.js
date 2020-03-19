import _ from 'lodash';
import faker from 'faker';
import uuidv4 from 'uuid/v4';

const items = _.times(300, () => ({
  id: uuidv4(),
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

const INITIAL_STATE = {
  items,
};

export function sourceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
