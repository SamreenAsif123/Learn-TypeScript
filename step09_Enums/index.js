"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
let direction = Direction.Right;
console.log(direction);
var Status;
(function (Status) {
    Status["active"] = "active";
    Status["inactive"] = "inactive";
    Status["pending"] = "Pending";
})(Status || (Status = {}));
let userStatus = Status.inactive;
console.log(userStatus);
function getUserStatus(status) {
    console.log(`User Status: ${status}`);
}
getUserStatus(Status.active);
//Create an enum 
var TransportMode;
(function (TransportMode) {
    TransportMode[TransportMode["Car"] = 0] = "Car";
    TransportMode[TransportMode["Bus"] = 1] = "Bus";
    TransportMode[TransportMode["Bike"] = 2] = "Bike";
    TransportMode[TransportMode["Train"] = 3] = "Train";
    TransportMode[TransportMode["Airplane"] = 4] = "Airplane";
})(TransportMode || (TransportMode = {}));
function getTravelTime(mode, distance) {
    let speed;
    switch (mode) {
        case TransportMode.Car:
            speed = 60;
            break;
        case TransportMode.Bus:
            speed = 80;
            break;
        case TransportMode.Bike:
            speed = 10;
            break;
        case TransportMode.Airplane:
            speed = 900;
            break;
        case TransportMode.Train:
            speed = 120;
            break;
        default:
            throw new Error('Unknown mode');
    }
    return distance / speed;
}
function printTravelTime(mode, distance) {
    const time = getTravelTime(mode, distance);
    console.log(`Travel time by ${TransportMode[mode]} for ${distance} km is approximately ${time.toFixed(2)} hours.`);
}
const distances = [50, 100, 500, 1000, 2000];
distances.forEach(distance => {
    printTravelTime(TransportMode.Car, distance); // Car speeds
    printTravelTime(TransportMode.Bus, distance); // Bus speeds
    printTravelTime(TransportMode.Bike, distance); // Bike speeds
    printTravelTime(TransportMode.Train, distance); // Train speeds
    printTravelTime(TransportMode.Airplane, distance); // Airplane speeds
});
