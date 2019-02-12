import wombats from '../../../client/reducers/wombats'

test('wombats reducer ADD_WOMBAT', () => {
  const state = ['foo']
  const addAction = {
    type: 'ADD_WOMBAT',
    wombat: 'test wombat'
  }
  const expected = ['foo', 'test wombat']
  const actual = wombats(state, addAction)
  expect(actual).toEqual(expected)
})

test('wombats reducer DEL_WOMBAT', () => {
  const state = ['foo', 'bar']
  const deleteAction = {
    type: 'DEL_WOMBAT',
    wombat: 'foo'
  }
  const expected = ['bar']
  const actual = wombats(state, deleteAction)
  expect(actual).toEqual(expected)
})
