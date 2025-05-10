
const Filtered = (arr) => {
    const FilteredArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 10) {
            FilteredArr.push(arr[i]);
            totalItems = FilteredArr.length;
            console.log(`Total items in FilteredArr: ${totalItems}`);
        }
    }
    return FilteredArr;

}
const result = Filtered([1, 2, 3,3,2,2,6,5,7, 3, 4, 5, 12]);
console.log(result); 


// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

const closestToZero = (arr) => { 
    let closest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(closest) || (Math.abs(arr[i]) === Math.abs(closest) && arr[i] > closest)) {
            closest = arr[i];
        }
    }
    return closest;
}
const result2 = closestToZero([-4,-2,1,4,8]);