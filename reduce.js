
const reduce = (nums, fn, init) => {
    let val = init;
    for (let i = 0; i < nums.length; i++){
        val = fn(val, nums[i], i);
    }
    return val;
}
// const result = reduce([1, 2, 3])
// console.log(result);

// const reduce = (nums, cal, init) => { 
//     let accum = init;
//     if(nums.length === 0) {
//         return accum;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         accum = cal(accum, nums[i], i);
//     }
//     return accum;
// }
const result = reduce([1, 2, 3], (acc, num) => acc + num, 0);
console.log(result); // Output: 6