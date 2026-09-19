export {};

//comparing frequency table
function _isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  let s_map = new Map<string, number>();
  let t_map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    s_map.set(s[i], (s_map.get(s[i]) || 0) + 1);
    t_map.set(t[i], (t_map.get(t[i]) || 0) + 1);
  }

  if (s_map.size !== t_map.size) {
    return false;
  }

  for (const [key, value] of s_map) {
    if (t_map.get(key) != value) {
      return false;
    }
  }
  return true;
}

//Array fill method
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  let frequency = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let sVal = s.charCodeAt(i) - 97;
    frequency[sVal]++
    let tVal = t.charCodeAt(i) - 97;
    frequency[tVal]--
  }
  return frequency.every((val) => val == 0)
}

const testCases: [string, string][] = [
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["a", "a"],
  ["a", "b"],
  ["aa", "a"],
  ["listen", "silent"],
];

for (const [s, t] of testCases) {
  console.log(`Input:       s=${JSON.stringify(s)}, t=${JSON.stringify(t)}`);
  console.log(`Output:      ${isAnagram(s, t)}`);
  console.log("-".repeat(35));
}
