class GroupAnagrams implements SolutionGroupAnagrams {
    groupAnagrams(strs: string[]): any {
        if (strs.length === 0 || strs.length === 1) {
            return strs;
        }
        let mapGroupAn: Map<string, number> = new Map<string, number>();
        let arrGroupAn: string[][] = [];
        let index = 0;
        for (let str of strs) {
            const groupIndex = mapGroupAn.get(str.split('').sort().join('')); 
            if(groupIndex !== undefined) {
                arrGroupAn[groupIndex].push(str);

            } else {
                const s = str.split('').sort().join('');
                mapGroupAn.set(s, index);
                arrGroupAn.push([str]);
                index++;
            }
        }
        return arrGroupAn;
    }
}

const groupAnagrams: GroupAnagrams = new GroupAnagrams();
console.log(groupAnagrams.groupAnagrams(["act","pots","tops","cat","stop","hat"]));

// Time Complexity: O(n * m log m)
// Space Complexity: O(n * m)