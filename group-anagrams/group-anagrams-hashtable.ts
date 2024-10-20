class GroupAnagramsHashtable implements SolutionGroupAnagrams {
    groupAnagrams(strs: string[]): any[] {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        console.log(res)
        return Object.values(res);
    }

}

const groupAnagramshashtable: GroupAnagramsHashtable = new GroupAnagramsHashtable();
console.log(groupAnagramshashtable.groupAnagrams(["act","pots","tops","cat","stop","hat"]));


// Time complexity: O(m∗n)
// Space complexity: O(m)