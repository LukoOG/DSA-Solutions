export {};

//Solution 2: Hashmap
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  //Construct map
  let magazine_map = new Map<string, number>();
  for (const char of magazine) {
    magazine_map.set(char, (magazine_map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!magazine_map.has(char) || magazine_map.get(char) == 0) {
      return false;
    } else if (magazine_map.has(char)) {
      magazine_map.set(char, (magazine_map.get(char) || 0) - 1);
    }
  }

  return true;
}

const testCases: [string, string][] = [
  ["a", "b"],
  ["aa", "ab"],
  ["aa", "aab"],
  ["bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbeggbjgeggbg"],
  ["", "abc"],
];

for (const [ransomNote, magazine] of testCases) {
  console.log(`Ransom Note: ${JSON.stringify(ransomNote)}`);
  console.log(`Magazine:    ${JSON.stringify(magazine)}`);
  console.log(`Output:      ${canConstruct(ransomNote, magazine)}`);
  console.log("-".repeat(35));
}
