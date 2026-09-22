# Palindrome Linked List

**Platform:** LeetCode — [Problem 234](https://leetcode.com/problems/palindrome-linked-list/)  
**Difficulty:** Easy  
**Topic:** Linked Lists, Two Pointers

---

## Problem

Given the head of a singly linked list, return `true` if it is a palindrome, `false` otherwise.

**Example:**

Input: head = [1, 2, 2, 1]
Output: true


---

## Approach — Find Middle, Reverse Second Half, Compare

Three distinct phases, each a single pass:

**Phase 1 — Find the middle** using the slow/fast pointer pattern. When fast reaches the end, slow is at the middle. For even length lists this lands on the second middle node, which is the correct split point.

**Phase 2 — Reverse the second half** in place starting from the middle node. Three pointers — `prev`, `curr`, and `next` — walk forward, rewiring each node's `next` pointer to point backward. When the loop ends, `prev` is the new head of the reversed second half.

**Phase 3 — Compare** by walking `prev` (reversed second half) and `head` (original first half) simultaneously. If any values differ, return `false`. If all match, it's a palindrome.

### Language Notes

In Python, three sequential while loops carrying pointer overhead is noticeably slow due to interpreter overhead per iteration. The idiomatic Python solution converts the list to an array and compares `arr == arr[::-1]`, which runs entirely at the C level and is significantly faster in practice. The in-place reversal remains the industry standard for compiled languages like Go and TypeScript where pointer manipulation is cheap.

### Pseudocode
```
function isPalindrome(head):
    if head is null or head.next is null:
    return true

    // Phase 1 — find middle
    slow = head
    fast = head
    while fast is not null and fast.next is not null:
        fast = fast.next.next
        slow = slow.next

    // Phase 2 — reverse second half
    prev = null
    curr = slow
    while curr is not null:
        next      = curr.next
        curr.next = prev
        prev      = curr
        curr      = next

    // Phase 3 — compare
    while prev is not null:
        if prev.val != head.val:
            return false
        prev = prev.next
        head = head.next

    return true
```
- **Time:** O(n)
- **Space:** O(1) for in-place (Go, TS) — O(n) for array approach (Python)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/palindrome_linked_list.py` |
| TypeScript | `TS/palindromeLinkedList.ts` |
| Go | `go/palindrome_linked_list.go` |

---

## Running Locally

**Python**
```bash
python3 palindrome_linked_list.py
```

**TypeScript**
```bash
tsx palindromeLinkedList.ts
```

**Go**
```bash
go run palindrome_linked_list.go
```