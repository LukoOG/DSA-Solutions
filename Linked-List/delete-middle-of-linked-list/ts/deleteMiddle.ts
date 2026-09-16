export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function buildLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function deleteMiddle(head: ListNode | null) {
  return buildLinkedList([1]);
}

const testCases: number[][] = [
  [1, 3, 4, 7, 1, 2, 6],
  [1, 2, 3, 4],
  [2, 1],
  [1],
  [1, 2, 3],
];

for (const values of testCases) {
  const head = buildLinkedList(values);
  const result = deleteMiddle(head);
  console.log(`Input:       ${JSON.stringify(values)}`);
  console.log(`Output:      ${JSON.stringify(linkedListToArray(result))}`);
  console.log("-".repeat(35));
}
