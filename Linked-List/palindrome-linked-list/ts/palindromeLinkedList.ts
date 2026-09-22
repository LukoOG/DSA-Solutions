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

function isPalindrome(head: ListNode | null): boolean {
    if( !head || !head.next){
        return true
    }
    let middle: ListNode = head;
    let end: ListNode | null = head;
    //Find the middle
    while(end && end.next){
        middle = middle.next
        end = end.next.next
    }
    //reverse in place
    let curr = middle
    let prev = null
    let next = null
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    //compare both pointers
    while(prev){
        if(prev.val != head.val){
            return false
        }
        prev = prev.next
        head = head.next
    }
    return true
}

const testCases: number[][] = [
    [1, 2, 2, 1],
    [1, 2, 3, 2, 1],
    [1, 2],
    [1, 2, 3],
    [1],
    [1, 1],
];

for (const values of testCases) {
    const head = buildLinkedList(values);
    console.log(`Input:       ${JSON.stringify(values)}`);
    console.log(`Output:      ${isPalindrome(head)}`);
    console.log("-".repeat(35));
}