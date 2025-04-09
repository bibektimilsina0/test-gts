const items = require('../../data.json'); // Adjust path as needed
const fs = require('fs');
const path = require('path');

const getItems = (req, res) => {
  res.json(items);
};

const makePackages = (req, res) => {
  const data = req.body;
selectedItems=data.items;

  // Sort items based on price descending
  selectedItems.sort((a, b) => b.price - a.price);

  let packages = [];

  // Package separation logic
  for (const item of selectedItems) {
    let addedToPackage = false;
    for (const package of packages) {
      if (package.totalPrice + item.price <= 250) {
        package.items.push(item.name);
        package.totalPrice += item.price;
        package.totalWeight += item.weight;
        addedToPackage = true;
        break;
      }
    }
    
    // If the item wasn't added to an existing package, create a new one
    if (!addedToPackage) {
      packages.push({
        items: [item.name],
        totalPrice: item.price,
        totalWeight: item.weight,
      });
    }
  }
  // logic for courier charge
  const getCourierCharge = (weight) => {
    if (weight <= 200) return 5;
    if (weight <= 500) return 10;
    if (weight <= 1000) return 15;
    return 20;
  };
  // Calculate courier price for each package
  packages = packages.map((package) => ({
    ...package,
    courierPrice: getCourierCharge(package.totalWeight),
  }));
console.log(packages)
  res.status(200).json(packages);
};

module.exports = {
  getItems,
  makePackages,
};
