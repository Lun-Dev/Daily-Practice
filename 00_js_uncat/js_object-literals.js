function newAddress(buildingName, streetName) {
    const addressDetail = { buildingName, streetName } // if function expression equals values of variable in the fuction, it will automatically assume the key
    console.log(addressDetail)
}

newAddress("The Grove", "Elk Street")