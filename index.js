function distanceFromHqInBlocks(someValue) {
    return someValue > 42 ? someValue - 42 : 42 - someValue 
  }

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return (start < destination ? destination - start : start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}
