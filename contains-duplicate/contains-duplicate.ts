// Duplicate Integer 
/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/
// to run the file: npx tsx .\contains-duplicate.ts

class ContainsDuplicate implements Solution {

    hasDuplicate(nums: number[]): boolean {
        let l:number[] = [];
        for(let i=nums.length-1; i>0; i--) {
            const elt = nums.pop();
            l.push(elt!);
            if (l.includes(nums[i-1])) {
                console.log(l)
                return true;
            }
            console.log(l.includes(nums[i-1]));
            console.log(l);

        }
        return false;
    }

}

// nums = [1, 2, 3, 3] result: true
// nums = [1, 2, 3, 4] result: false
let containsDuplicate:ContainsDuplicate = new ContainsDuplicate();
console.log(containsDuplicate.hasDuplicate([1, 2, 3, 3]));

// The time complexity of this algorithm is: O(n^2)