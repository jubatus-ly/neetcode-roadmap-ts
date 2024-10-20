class GroupAnagramsSorted implements SolutionGroupAnagrams {
    groupAnagrams(strs: string[]): any[] {
        const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        console.log(res);
        return Object.values(res);
    }

}

const groupAnagramsSorted: GroupAnagramsSorted = new GroupAnagramsSorted();
console.log(groupAnagramsSorted.groupAnagrams(["act","pots","tops","cat","stop","hat"]));

// Time Complexity: O(n * m log m)
// Space Complexity: O(n * m)