//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js').Vehicle;

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
            this.maxPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maxSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
    }
        loadPassenger(num) {
            if (this.passenger < this.maxPassengers) {
                if ((num + this.passenger) <= this.maxPassengers) {
                    this.passenger = num;
                    return this.passenger;
                } else {
                    console.log(`${this.make} ${this.model} does not have enough space to take all passengers.`)
                    console.log(`${this.make} ${this.model} is full!`)
                }
            }
        }
        start() {
            if (this.fuel > 0) {
                console.log('Engine has started');
                return this.started = true;
            } else {
                console.log('No fuel!')
                return this.started = false;
            }
        }
        scheduleService(mileage) {
            if(mileage > 30000) {
                console.log('Time for vehicle service!')
                this.scheduleService = true;
            } else {
                console.log('No vehicle maintenance required!')
                this.scheduleService = false;
            }
        }
}


console.log()