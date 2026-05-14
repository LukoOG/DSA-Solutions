export {}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

//Helper Functions
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
//

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    
    return null
}

const testCases: [number[], number][] = [
    [[1, 2, 3, 4, 5], 2],
    [[0, 1, 2], 4],
    [[1], 0],
    [[1, 2], 1],
    [[1, 2, 3], 3],
];

for (const [values, k] of testCases) {
    const head = buildLinkedList(values);
    const result = rotateRight(head, k);
    console.log(`Input:       ${JSON.stringify(values)}, k=${k}`);
    console.log(`Output:      ${JSON.stringify(linkedListToArray(result))}`);
    console.log("-".repeat(35));
}