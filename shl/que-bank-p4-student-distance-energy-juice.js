
//A student misses the bus and has to walk all the way from home to school. //The distance from home to school is D units.
//The student starts his journey with the initial energy of K units. 
//The energy of the student decreases by 1 unit for every unit of distance walked. 
//On the way to school, there is N juice stalls. 
//Each stall has a specific amount of juice in liters. The energy of students increased by 1 unit for every liter of juice they consumes. Note that in order to keep walking the student should non-zero energy.
//Write an algorithm to help the student in figuring out the minimum number of juice stalls at which they should stop to successfully reach the school. // in case the student can't reach the school the output will be -1
//expected output: Print the integer representing the minimum number of juice stalls at the which the student should stop to reach the school successfully.


//The first line of input consists of an integer - numStalls,representing the number of juice stalls(N). 
//The second line consists of N-space separated integers-dist0, dist1…
//distn representing the distance of the nth stall from the student's home. //The third line consists of an integer numzS, representing the number of stall for available juices(M is always equal to N). 
//The fourth line consists of M space-separated integer lit0, lit1....litn, representing the liters of juice available at ith stall.
//The fifth line consists of an integer -distance representing the distance of the school from student's home(D). 
// the last line consists of integer intEnergy, representing the initial energy ofstudent(K).

//First Input : 3
//Second Input: 5, 7, 10
//Third input: 3
//Fourth Input: 2 3 5 
//Fifth Input: 15
//Sixth Input: 5

//expected Output: 3




function calculateMinStalls(numStalls, stallDistance, juiceInStallInLtr, totalDistance, initialEnergy) {
  let stalls = [];
  for (let i = 0; i < numStalls; i++) {
    stalls.push({ dist: stallDistance[i], juice: juiceInStallInLtr[i] });
  }

  stalls.sort((a, b) => a.dist - b.dist); // Sort by distance

  let maxHeap = []; // simulate max heap using array
  let energy = initialEnergy;
  let stops = 0;
  let i = 0;

  for (let dist = 1; dist <= totalDistance; dist++) {
    energy--;

    // Add all stalls at this distance to heap
    while (i < stalls.length && stalls[i].dist === dist) {
      maxHeap.push(stalls[i].juice);
      i++;
    }

    // If energy is 0, consume juice from max heap
    if (energy === 0) {
      if (maxHeap.length === 0) return -1;

      // Get max juice
      let maxJuice = Math.max(...maxHeap); 
      maxHeap.splice(maxHeap.indexOf(maxJuice), 1); // remove it
      energy += maxJuice;
      stops++;
    }
  }

  return stops;
}

// Example usage:
const numStalls = 3;
const stallDistance = [5, 7, 10];
const juiceInStallInLtr = [2, 3, 5];
const totalDistance = 15;
const initialEnergy = 5;

console.log(calculateMinStalls(numStalls, stallDistance, juiceInStallInLtr, totalDistance, initialEnergy)); // Output: 3
