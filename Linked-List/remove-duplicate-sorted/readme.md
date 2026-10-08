# Remove Duplicates from Sorted List

**Platform:** LeetCode — [Problem 83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)  
**Difficulty:** Easy  
**Topic:** Linked Lists

---

## Problem

Given the head of a sorted linked list, remove all duplicates so each element appears only once. Return the modified list.

**Example:**

Input: head = [1, 1, 2]
Output: [1, 2]


---

## Approach — Single Pass with Current Pointer

Since the list is sorted, duplicates are always adjacent. A single pointer `curr` walks the list — when `curr.val == curr.next.val`, the next node is skipped by rewiring `curr.next` to `curr.next.next`. When they differ, `curr` advances normally. The loop terminates when `curr` or `curr.next` is null.

### Pseudocode
```
function deleteDuplicates(head):
curr = head

while curr is not null and curr.next is not null:
    if curr.val == curr.next.val:
        curr.next = curr.next.next   // skip duplicate
    else:
        curr = curr.next             // advance

return head
```
- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/remove_duplicates.py` |
| TypeScript | `TS/removeDuplicates.ts` |
| Go | `go/remove_duplicates.go` |

---

## Running Locally

**Python**
```bash
python3 remove_duplicates.py
```

**TypeScript**
```bash
tsx removeDuplicates.ts
```

**Go**
```bash
go run remove_duplicates.go
```