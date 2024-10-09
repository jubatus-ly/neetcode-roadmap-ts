
// In the Hashset algorithm we are trying to sacrifice space complexity for O(n) time complexity
class ContainsDuplicateHashset implements Solution {
    hasDuplicate(nums: number[]): boolean {
        let seen : Set<number> = new Set();

        for(let num of nums) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
        return false;
    }

}

// nums = [1, 2, 3, 3] result: true
// nums = [1, 2, 3, 4] result: false
let containsDuplicateHashset:ContainsDuplicateHashset = new ContainsDuplicateHashset();
console.log(containsDuplicateHashset.hasDuplicate([1, 2, 3, 3]));

// Time complexity: O(n)
// Space complexity: O(n)
