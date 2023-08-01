function distanceFromHqInBlocks(location) {
    const hqPosition = 42;
    const distance = Math.abs(location - hqPosition);
    return distance;
  }

  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
    }
  
    function distanceTravelledInFeet(start, destination) {
        const feetPerBlock = 264;
        const distanceInBlocks = Math.abs(start - destination);
        const distanceInFeet = distanceInBlocks * feetPerBlock;
        return distanceInFeet;
      }
  
      function calculatesFarePrice(start, destination) {
        const distanceInFeet = distanceTravelledInFeet(start, destination);
      
        if (distanceInFeet <= 400) {
          return 0;
        } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
          const fare = (distanceInFeet - 400) * 0.02;
          return fare;
        } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
          return 25;
        } else if (distanceInFeet > 2500) {
          return 'cannot travel that far';
        }
      }