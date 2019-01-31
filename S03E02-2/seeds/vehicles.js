exports.seed = knex =>
  knex('vehicles')
    .del()
    .then(() =>
      knex('vehicles').insert([
        { id: 1, make: 'Mazda', model: '6', number_plate: 'ABC123' },
        { id: 2, make: 'Toyota', model: 'Hiace', number_plate: 'DEF456' },
        { id: 3, make: 'Mitsubishi', model: 'L300', number_plate: 'GHI789' },
        { id: 4, make: 'Xiaomi', model: 'M365', number_plate: 'FUNYAY' },
        { id: 5, make: 'Specialized', model: 'Tricross Bike', number_plate: 'NOGAS' }
      ]))
