// Code your solution in this file!
//he assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array:
const returnFirstTwoDrivers = function (drivers) {
  drivers = ["Sandra", "Alex", "Midnight"];
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
//selectingDrivers — This is an array containing two elements: the two functions that we previously defined
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fareMultiplier) {
    return fareMultiplier * integer;
  };
};
// Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareDoubler = createFareMultiplier(2);
//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driverSelector) {
  return driverSelector(drivers);
};
