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
    if(k == 0 || head == null || head.next == null){
        return head
    };

    let length = 1;
    let tail = head;
    while(tail.next){
        tail = tail.next
        length++
    };

    k = k % length;
    if(k == 0) return head;
    tail.next = head;
    let newTailPos = length - k -1;
    // for(let i = 0; i < newTailPost; i++){
    //     head = head?.next;
    // }
    while(newTailPos > 0){
        head = head?.next
        newTailPos--
    };

    const newHead = head?.next;
    head.next = null;
    return newHead
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