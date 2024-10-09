class TwoIntegerSum implements SolutionTwoSum {
    twoSum(nums: number[], target: number): number[] {
        let mapNums: Map<number, number> = new Map;
        
        for(let i=0; i<nums.length; i++) {
            mapNums.set(nums[i], Math.abs(nums[i]-target));
        }

        for (let [key, val] of mapNums) {
            if (mapNums.has(val)) {
                const arrayMapNums = Array.from(mapNums.entries());
                const index1 = arrayMapNums.findIndex(([k, v]) => k === key);
                const index2 = arrayMapNums.findIndex(([k, v]) => k === val);
                // findIndex index2 index1+1 step next
                return [index1, index2]
            }
        }
        return [];
    }

}

// [3,4,5,6], 7

const twoIntegerSum: TwoIntegerSum = new TwoIntegerSum();
console.log(twoIntegerSum.twoSum([5,5,5], 10));