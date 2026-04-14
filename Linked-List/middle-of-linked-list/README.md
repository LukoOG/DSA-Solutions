# Middle of the Linked List

**Platform:** LeetCode — [Problem 876](https://leetcode.com/problems/middle-of-the-linked-list/)  
**Difficulty:** Easy  
**Topic:** Linked Lists, Two Pointers

---

## Problem

Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second one.

**Example:**
Input:  [1, 2, 3, 4, 5]
Output: [3, 4, 5]

---

## Approach — Two Pointers (Slow / Fast)

I implemented the two-pointer pattern. I start with 2 pointers-middle and end-at the head; every time the end pointer moves twice, the middle pointer moves once. When the end pointer can no longer move twice, we retrieve the value from the middle pointer.

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/middle_linked_list.py` |
| TypeScript | `TS/middleLinkedList.ts` |

> 14 April 2026: Rust implementation skipped for now — linked lists in Rust require ownership concepts I'm not yet familiar with.

---

## Running Locally

**Python**
```bash
python3 middle_linked_list.py
```

**TypeScript**
```bash
tsx middleLinkedList.ts
```