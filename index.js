// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neiId = 0;
let customerId = 0;
let mealId = 0;
let delId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neiId;
    store.neighborhoods.push(this)
  }

  deliveries() {
    return store.deliveries.filter(
      function(d) {
        return d.neighborhoodId === this.id
      }.bind(this)
    )
  }

  customers() {
    return store.customers.filter(
      function(c) {
        return c.neighborhoodId === this.id
      }.bind(this)
    )
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
    store.meals.push(this)
  }
}

class Delivery {
  constructor(mealId, customerId, neighborhoodId) {
    this.id = ++delId;
    this.mealId = mealId;
    this.customerId = customerId;
    this.neighborhoodId = neighborhoodId;
    store.deliveries.push(this)
  }
}
