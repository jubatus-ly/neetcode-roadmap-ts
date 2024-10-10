class TwoIntegerSumHashMap implements SolutionTwoSum {
    twoSum(nums: number[], target: number): number[] {
        let mapNums = new Map();

        for (let index=0; index<nums.length; index++) {
            const num = nums[index];
            const diff = target - num;
            const sumIndex = mapNums.get(diff);

            const isTarget = mapNums.has(diff);

            if(isTarget) {
                return [sumIndex, index];
            }
            
            mapNums.set(num, index);
        }

        return [];
    }
    
}

const twoIntegerSumHashMap: TwoIntegerSumHashMap = new TwoIntegerSumHashMap();
console.log(twoIntegerSumHashMap.twoSum([4,5,6], 10));

// Time complexity: O(n)
// Space complexity: O(n)