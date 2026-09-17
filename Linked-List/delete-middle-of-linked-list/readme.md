# Delete the Middle Node of a Linked List

**Platform:** LeetCode — [Problem 2095](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)  
**Difficulty:** Medium  
**Topic:** Linked Lists, Two Pointers

---

## Problem

Given the head of a linked list, delete the middle node and return the modified head. The middle node of a list of `n` nodes is the `⌊n/2⌋`th node (0-indexed). For a single node, return `null`.

**Example:**

Input: head = [1, 3, 4, 7, 1, 2, 6]
Output: [1, 3, 4, 1, 2, 6]


---

## Approach — Offset Fast Pointer

The standard slow/fast pointer technique lands slow exactly on the middle node. The insight here is to give the fast pointer a head start of two steps — initialising it at `head.next.next` instead of `head` — which shifts where slow naturally stops to one node *before* the middle. When the loop ends, the deletion is a single pointer reassignment with no second traversal and no previous pointer needed.

An early return handles the single and two node edge cases before the fast pointer is initialised, since `head.next.next` would be unsafe to access otherwise.

### Pseudocode
```
function deleteMiddle(head):
    if head is null or head.next is null:
    return null

    slow = head
    fast = head.next.next

    while fast is not null and fast.next is not null:
        slow = slow.next
        fast = fast.next.next

    // slow is now one step before the middle
    slow.next = slow.next.next

    return head
```

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/delete_middle.py` |
| TypeScript | `TS/deleteMiddle.ts` |
| Go | `go/delete_middle.go` |

---

## Running Locally

**Python**
```bash
python3 delete_middle.py
```

**TypeScript**
```bash
tsx deleteMiddle.ts
```

**Go**
```bash
go run delete_middle.go
```