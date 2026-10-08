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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head
    while(current && current.next){
        if(current.val == current.next.val){
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
}

const testCases: number[][] = [
    [1, 1, 2],
    [1, 1, 2, 3, 3],
    [1, 2, 3],
    [1, 1, 1, 1],
    [1],
    [],
];

for (const values of testCases) {
    const head = buildLinkedList(values);
    const result = deleteDuplicates(head);
    console.log(`Input:       ${JSON.stringify(values)}`);
    console.log(`Output:      ${JSON.stringify(linkedListToArray(result))}`);
    console.log("-".repeat(35));
}