'use strict';

const $ = require('jquery');

$.ajax({
    url: '../data/dogfood.json'
})
.done( (dogData) => {
 // Loop through first array
    dogData.dog_brands.forEach( (brand, index) => {
        console.log(`brand${index}`, brand);
       let $dogFood = $("#dogFood");
       $dogFood.append(`<h3>${brand.name}</h3>`);

// Loop through each brand's types array
        brand.types.forEach( (brandType) => {
            $dogFood.append(`<h4>${brandType.type}</h4>`);

    // Loop through brandType's volumes array
            brandType.volumes.forEach(vol => {
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
            });
        });
    });
})
.fail( (error) => {
    console.log('Oops', error.statusText);
});


