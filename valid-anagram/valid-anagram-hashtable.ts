class ValidAnagramHashtable implements SolutionValidAnagram {
    isAnagram(s: string, t: string): boolean {
        let mapS: Map<string,number> = new Map();
        let mapT: Map<string, number> = new Map();
        
        if( s.length !== t.length) return false;

        for(let i=0; i<s.length; i++) {
            mapS.set(s[i], (mapS[s[i]] || 0) + 1);
            mapT.set(t[i], (mapT[t[i]] || 0) + 1);
        }

        for(let [key,val] of mapS) {
            if(!mapT.has(key) || mapT.get(key) !== val) return false;
        }

        return true;

        
    }

}
// s = "racecar", t = "carrace"
// s = "jar", t = "jam"
const validAnagramHashtable: ValidAnagramHashtable = new ValidAnagramHashtable;
console.log(validAnagramHashtable.isAnagram("jar", "jam"));