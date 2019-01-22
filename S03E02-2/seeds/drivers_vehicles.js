exports.seed = knex =>
  knex('drivers_vehicles')
    .del()
    .then(() =>
      knex('drivers_vehicles').insert([
        { id: 1, driver_id: 1, vehicle_id: 1 },
        { id: 2, driver_id: 1, vehicle_id: 2 },
        { id: 3, driver_id: 2, vehicle_id: 3 },
        { id: 4, driver_id: 3, vehicle_id: 2 },
        { id: 5, driver_id: 2, vehicle_id: 4 }
      ]))
