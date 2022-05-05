// Factory functions + mixins
const Vehicle = {
    methods: {
        move: function() {
        this.loc++;
        }
    }
};

const Car = (loc) => ({
    loc,
    ...Car.methods,
    ...Vehicle.methods
});

Car.methods = {
    honk: function() {
        console.log('beep beep!')
    }
};

const Ship = (loc, captain) => ({
    loc,
    captain,
    ...Ship.methods,
    ...Vehicle.methods
});

Ship.methods = {
    honk: function() {
        console.log('* fog horn noises *');
    }
};

// Classical ES6 style
class Vehicle {
    constructor(loc) {
        this.loc = loc;
    }   

    move() {
        this.loc++;
    }
}

class Car extends Vehicle {
    honk() {
        console.log('beep beep!')
    }
}

class Ship extends Vehicle {
    honk() {
        console.log('* fog horn noises *')
    }
}

const car = new Car(0);
const ship = new Ship(0);
car.honk();
ship.honk();

car.move();
ship.move();
console.log(car.loc)
console.log(ship.loc)