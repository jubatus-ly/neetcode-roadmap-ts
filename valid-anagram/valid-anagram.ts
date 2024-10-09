class ValidAnagram implements SolutionValidAnagram {
    isAnagram(s: string, t: string): boolean {
        let sortedS = s.split("").sort();
        let sortedT = t.split("").sort();

        if (sortedS.length !== sortedT.length) {
            console.log("s and t do not have the same length ==> not a valid anagram");
            return false;
        }

        for(let i=0; i<sortedS.length; i++) {
            if(sortedS[i] !== sortedT[i]) return false;
        }

        return true;
    }
    
}

// s = "racecar", t = "carrace"
const validAnagram: ValidAnagram = new ValidAnagram();
console.log(validAnagram.isAnagram("jar", "jam"));