function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  The time complexity of this algorithm is O(n^2),
  This means that it takes a long time to run when the input is large. 
  This is because the function uses two nested for loops, which means that it has to do a lot of work as the input gets bigger
*/

/* 
   loop through each element in the array two times and check if the two elements are different and add up to the target number.
   if an added pair is found to be equal to the target then it should return true.
*/

/*
  the function loops through the element two times and adds different numbers together to check
  if the new value is equal to the target.
*/


if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
