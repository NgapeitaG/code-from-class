// Our wombats [in-memory] database ;)
const wombats = [{name: 'Rufus'}]

module.exports = {
  getAllWombats,
  saveNewWombat
}

function getAllWombats () {
  return wombats
}

function saveNewWombat (newWombat) {
  wombats.push(newWombat)
}
