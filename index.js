// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neiId = 0;
let customerId = 0;
let mealId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neiId;
    store.neighborhoods.push(this)
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this)
  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
  }
}

class Delivery {
  constructor(name) {
    this.name = name;
  }
}
