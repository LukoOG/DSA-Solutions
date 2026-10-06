export {};

function groupAnagrams(s: string[]): string[][] {
  const tab = new Map<string, string[]>();

  for (let i = 0; i < s.length; i++) {
    const keyArray = new Uint8Array(26);
    const str = s[i];
    for (let j = 0; j < str.length; j++) {
      keyArray[str.charCodeAt(j) - 97] += 1;
    }

    const key = keyArray.toString();
    let group = tab.get(key);
    if (!group) {
      group = [];
      tab.set(key, group);
    }
    group.push(str);
  }
  return Array.from(tab.values());
}

const testCases: string[][] = [
  ["eat", "tea", "tan", "ate", "nat", "bat"],
  [""],
  ["a"],
  ["abc", "bca", "cab", "xyz", "zyx"],
  ["ab", "ba", "abc", "cba", "bac"],
];

for (const strs of testCases) {
  console.log(`Input:       ${JSON.stringify(strs)}`);
  console.log(`Output:      ${JSON.stringify(groupAnagrams(strs))}`);
  console.log("-".repeat(35));
}
