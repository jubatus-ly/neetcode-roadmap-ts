// this solution was first done by a map but since the map do cannot duplicate keys 
// and since we need to find the index so i got in trouble with the map
// so i created a new object {value: number, diff: number} and my algorith worked
// Time complexity: O(n^2)
// Space complexity: O(n)
class TwoIntegerSum implements SolutionTwoSum {
    twoSum(nums: number[], target: number): number[] {
        let arrayNums: Array<{ value: number, diff: number }> = [];
        for(let i=0; i<nums.length; i++) {
            arrayNums.push({value: nums[i], diff: Math.abs(nums[i]-target)})
        }
        console.log(arrayNums);
        for (let {value, diff} of arrayNums) {
            if (arrayNums.find((e) => e.diff === value)) {
                const index1 = arrayNums.findIndex(e => e.value === value);
                const index2 = arrayNums.findIndex((e, index) => {  
                    if (index1 !== index && e.value === diff) {
                        return true;
                    }
                    return false;
                });
                return [index1, index2];
            }
        }
        return [];
    }

}

// [3,4,5,6], 7
const twoIntegerSum: TwoIntegerSum = new TwoIntegerSum();
console.log(twoIntegerSum.twoSum([4,5,5], 10));