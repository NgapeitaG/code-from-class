import React from 'react'
import { shallow } from 'enzyme'

import AppRoutes from '../client/components/AppRoutes'

test('<AppRoutes /> matches the last snapshot', () => {
  expect(shallow(<AppRoutes posts={[]} />)).toMatchSnapshot()
})
