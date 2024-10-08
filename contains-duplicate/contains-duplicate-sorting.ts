
class ContainsDuplicateSorting implements Solution {
    hasDuplicate(nums: number[]): boolean {
        nums.sort();
        for(let i=0; i<nums.length; i++) {
            if(nums[i] == nums[i+1]) {
                return true;
            }
        } 
        return false;
    }

}

// nums = [1, 2, 3, 3] result: true
// nums = [1, 2, 3, 4] result: false
let containsDuplicateSorting:ContainsDuplicateSorting = new ContainsDuplicateSorting();
console.log(containsDuplicateSorting.hasDuplicate([1, 2, 3, 4]));

// The complexity of this algorithm is O(n*log(n))