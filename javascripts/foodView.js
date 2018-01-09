'use strict';

const $ = require('jquery');
const _startCase = require("lodash.startcase");

// Loop through first array
module.exports.displayfood = (dogData) => {
    dogData.forEach( (brand, index) => {
        console.log(`brand${index}`, brand);
    let $dogFood = $("#dogFood");
    $dogFood.append(`<h3>${_startCase(brand.name)}</h3>`);

// Loop through each brand's types array
        brand.types.forEach(brandType => {
            $dogFood.append(`<h4>${_startCase(brandType.type)}</h4>`);

// Loop through brandType's volumes array
            brandType.volumes.forEach(vol => {
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
            });
        });
    });
};
