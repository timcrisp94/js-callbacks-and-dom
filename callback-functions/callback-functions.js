console.log('hi')

const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 }
]

// use the filter method to select the objects within cars that have been driven more than 20,000 miles per year

console.log(cars)

let wellDrivenCars = cars.filter(function(car) {
  // console.log(car.mileage)
  let milesPerYear = car.mileage / car.yrsOld
  if (milesPerYear > 20000){
    return car
  }
})

console.log(wellDrivenCars)

let wellDrivennCars = cars.filter(car => (car.mileage / car.yrsOld) > 20000)

console.log(wellDrivennCars)

