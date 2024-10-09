
// In the sorting algorithm we are trying to sort the array to make the duplicates adjacent with each other
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

// Time complexity: O(n*log(n))
// Space complexity: O(1)