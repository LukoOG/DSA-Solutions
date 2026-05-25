export {};

function nextDestination(s: string): number {
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === "0") {
      return i;
    }
  }

  return s.length - 1;
}

function canJumpFn(dest: number, jump: number, end: number): boolean {
    if(jump == dest){
        return true
    } else if (jump > dest){
        if (jump == end){
            return true
        } else if (jump > end) {
            return false
        }
    }

    return false
}

function canReach(s: string, minJump: number, maxJump: number): boolean {
  //   for(let i = 0; i <= s.length - 1; i++){
  let i = 0;
  while (i < s.length - 1) {
    const j = i + nextDestination(s.slice(i));
    console.log("index:", i, "next: ", j);
    let jump = i + minJump;

    //if Min Jump is insufficient
    if (jump < j) {
      jump = Math.min(i + maxJump, s.length - 1);
    }

    console.log(jump)
    const canJump = canJumpFn(j, jump, s.length);

    if (canJump && s[j] === "0") {
      i = j;
    } else {
      return false;
    }
  }
  return true;
}

const testCases: [string, number, number][] = [
  ["011010", 2, 3],
  ["01101110", 2, 3],
  ["00", 1, 1],
  ["01", 1, 1],
  ["0000000000", 2, 3],
  ["010", 1, 2],
  ["00111010", 3, 5],
];

for (const [s, minJump, maxJump] of testCases) {
  console.log(
    `Input:       s=${JSON.stringify(s)}, minJump=${minJump}, maxJump=${maxJump}`,
  );
  console.log(`Output:      ${canReach(s, minJump, maxJump)}`);
  console.log("-".repeat(35));
}
