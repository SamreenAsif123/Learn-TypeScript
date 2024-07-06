enum Direction {
    up,
    down,
    left,
    Right = 'Right'
}

let direction : Direction = Direction.Right
console.log(direction)


enum Status {
    active = 'active',
    inactive = 'inactive',
    pending = 'Pending'
}

let userStatus : Status = Status.inactive
console.log(userStatus)
function getUserStatus (status : Status) {
    console.log(`User Status: ${status}`)
}

getUserStatus(Status.active)



//Calculating Travel Time Using Different Modes of Transportation with Enums in TypeScript

enum TransportMode {
    Car,
    Bus,
    Bike,
    Train,
    Airplane
}

function getTravelTime(mode : TransportMode,distance:number) {
    let speed;

    switch(mode){
        case TransportMode.Car:
            speed = 60;
            break;
        case TransportMode.Bus :
            speed = 80;
            break;
        case TransportMode.Bike:
            speed =10;
            break;
        case TransportMode.Airplane: 
             speed = 900;
             break;
        case TransportMode.Train :
            speed = 120;
            break;
        default:
            throw new Error('Unknown mode')
    }

    return distance/speed;
}

function printTravelTime(mode: TransportMode, distance: number): void {
    const time = getTravelTime(mode, distance);
    console.log(`Travel time by ${TransportMode[mode]} for ${distance} km is approximately ${time.toFixed(2)} hours.`);
}

const distances = [50, 100, 500, 1000, 2000];

distances.forEach(distance => {
    printTravelTime(TransportMode.Car, distance);       // Car speeds
    printTravelTime(TransportMode.Bus, distance);       // Bus speeds
    printTravelTime(TransportMode.Bike, distance);      // Bike speeds
    printTravelTime(TransportMode.Train, distance);     // Train speeds
    printTravelTime(TransportMode.Airplane, distance);  // Airplane speeds
});

