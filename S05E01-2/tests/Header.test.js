import React from 'react'
import { shallow } from 'enzyme'

import Header from '../client/components/Header'

test('<Header /> matches the last snapshot', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})
