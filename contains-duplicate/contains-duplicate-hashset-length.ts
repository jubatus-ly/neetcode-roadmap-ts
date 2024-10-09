

class ContainsDuplicateHashsetLength implements Solution {
    hasDuplicate(nums: number[]): boolean {
        let seen: Set<number> = new Set();
        for(const num of nums) seen.add(num);
        if(seen.size === nums.length) return false;
        return true
    }

}

// nums = [1, 2, 3, 3] result: true
// nums = [1, 2, 3, 4] result: false
let containsDuplicateHashsetLength:ContainsDuplicateHashsetLength = new ContainsDuplicateHashsetLength();
console.log(containsDuplicateHashsetLength.hasDuplicate([1, 2, 3, 4]));

// Time complexity: O(n)
// Space complexity: O(n)