/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 方法一：暴力枚举
 */
var twoSum = function (nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 方法二：哈希表
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
    return [];
};

describe('two-sum', () => {
    test('Input: nums = [2,7,11,15], target = 9. Output: [0,1]', () => {
        expect(twoSum(nums = [2, 7, 11, 15], target = 9)).toStrictEqual([0, 1]);
    });
    test('Input: nums = [3,2,4], target = 6. Output: [1,2]', () => {
        expect(twoSum(nums = [3, 2, 4], target = 6)).toStrictEqual([1, 2]);
    });
    test('Input: nums = [3,3], target = 6.Output: [0,1]', () => {
        expect(twoSum(nums = [3, 3], target = 6)).toStrictEqual([0, 1]);
    });
});
