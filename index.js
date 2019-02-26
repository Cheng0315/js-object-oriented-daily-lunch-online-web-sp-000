// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neiId = 0;
class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neiId;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }
}

class Meal {
  constructor(name) {
    this.name = name;
  }
}

class Delivery {
  constructor(name) {
    this.name = name;
  }
}
