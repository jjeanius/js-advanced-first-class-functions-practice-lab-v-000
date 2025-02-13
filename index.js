// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

const driversCopy = [...drivers];

const logDriverNames = function(driver) {
  drivers.forEach (function(driver) {
    console.log(driver.name);
    });
  };

  const logDriversByHometown = function(drivers, hometown) {
    drivers.forEach (function(driver) {
      if ( driver.hometown === hometown ) {
      console.log(driver.name);
      }
    });
  };


  const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
  };


  const driversByName = function (drivers) {
    return drivers.slice().sort(function(driverOne, driverTwo) {
      return driverOne.name.localeCompare ( driverTwo.name );
    });
  };

  const totalRevenue = function (drivers) {
    return drivers.reduce(function(total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

  const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length; 
    };
