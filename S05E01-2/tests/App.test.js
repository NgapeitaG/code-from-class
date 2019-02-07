import React from 'react'
import App from '../client/components/App'

import { shallow } from 'enzyme'

test('App matches the last snapshot', () => {
  expect(shallow(<App />)).toMatchSnapshot()
})
