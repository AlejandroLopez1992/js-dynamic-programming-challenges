// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
// The funtion should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.
// You may reuse elements of `wordBank` as many times as needed.
// return true if target is empty

// When building the solution use logic to only branch of of the initial target from string that are prefixes to the target

const canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // indexOf provides the index of where you can find a substring within a larger string
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};
// m = target.length
// n = wordBank.length

// vizualizing the tree, height of the tree = m, which means max height is m 
// branching factor, dictated by n, is possible to branch many times as n^m,  which means max branching equals n^m

// brute force
// time: O(n^m * m)
// space: O(m^2)

// memoization optimization
// time: O(n * m^2) polynomial class
// space: O(m^2)

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true abc + def
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false 
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eee", "ee", "eeeee", "eeeeeee", "eeeeeeee"])); // false