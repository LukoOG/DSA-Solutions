export {};
// /**
//  * Definition for singly-linked list.
//  ** /

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//helper function to create testcases
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

//helper function to output linked list
function linkedListToArray(node: ListNode | null): number[] {
    const result: number[] = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

// Solution 2: using 2 pointers
function middleNode(head: ListNode | null): ListNode | null {
    if(head == null) return head;
    
    let middleNode: ListNode | null = head;
    let endNode: ListNode | null = head;
    let length = 0;

    while(endNode !== null && endNode.next != null && middleNode.next != null){ //2 possible jumps for end pointer
        middleNode = middleNode.next
        endNode = endNode.next.next
    };

    return middleNode
};

const testCases: number[][] = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6],
    [1],
    [1, 2],
];

for (const values of testCases) {
    const head = buildLinkedList(values);
    const result = middleNode(head);
    console.log(`Input:       ${JSON.stringify(values)}`);
    console.log(`Output:      ${JSON.stringify(linkedListToArray(result))}`);
    console.log("-".repeat(35));
}