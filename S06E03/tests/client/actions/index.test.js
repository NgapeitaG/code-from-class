import {addWombat, deleteWombat} from '../../../client/actions'

test('addWombat returns an action', () => {
  const name = 'test wombat'
  const expected = {
    type: 'ADD_WOMBAT',
    wombat: name
  }
  const actual = addWombat(name)
  expect(actual).toEqual(expected)
})

test('deleteWombat returns an action', () => {
  const name = 'test wombat'
  const expected = {
    type: 'DEL_WOMBAT',
    wombat: name
  }
  const actual = deleteWombat(name)
  expect(actual).toEqual(expected)
})
