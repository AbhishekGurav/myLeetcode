
const nums = [1,7,8,3,2,4];
const target = 6;

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function(nums, target) {
    const numObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        console.log(`Checking for ${complement} in ${numObj[complement]}`);
        if (complement in numObj) {
            return [numObj[complement], i];
        }
        
        numObj[nums[i]] = i;
        console.log(numObj);
    }
    
    return [];
};

console.log(twoSum(nums, target));