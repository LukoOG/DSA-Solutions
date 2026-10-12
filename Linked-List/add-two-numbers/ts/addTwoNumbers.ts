export {}

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyNode = new ListNode()
    let current = dummyNode
    let carry = 0
    while(l1 != null || l2 != null || carry != 0){
        const l1Value = l1 !== null ? l1.val : 0
        const l2Value = l2 !== null ? l2.val : 0
        const sum = l1Value + l2Value + carry

        carry = Math.floor(sum / 10);
        let digit = sum % 10

        current.next = new ListNode(digit)
        current = current.next

        l1 = l1 !== null ? l1.next : null
        l2 = l2 !== null ? l2.next : null
    }

    return dummyNode.next
};

const testCases: [number[], number[]][] = [
    [[2, 4, 3], [5, 6, 4]],
    [[0], [0]],
    [[9, 9, 9, 9], [9, 9, 9]],
    [[1], [9, 9]],
    [[5], [5]],
];

for (const [l1Vals, l2Vals] of testCases) {
    const l1 = buildLinkedList(l1Vals);
    const l2 = buildLinkedList(l2Vals);
    const result = addTwoNumbers(l1, l2);
    console.log(`Input:       ${JSON.stringify(l1Vals)} + ${JSON.stringify(l2Vals)}`);
    console.log(`Output:      ${JSON.stringify(linkedListToArray(result))}`);
    console.log("-".repeat(35));
}