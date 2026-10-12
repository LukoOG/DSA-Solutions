# Add Two Numbers

**Platform:** LeetCode — [Problem 2](https://leetcode.com/problems/add-two-numbers/)  
**Difficulty:** Medium  
**Topic:** Linked Lists, Math, Recursion

---

## Problem

Given two non-empty linked lists representing two non-negative integers stored in reverse order, add the two numbers and return the sum as a linked list in the same reverse order format.

**Example:**

Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
Reason: 342 + 465 = 807


---

## Approach — Dummy Node with Carry

A dummy head node is created to simplify list construction — it gives `current` a stable starting point so the first real node can be appended without a special case. `current` trails behind building the result while `dummy_node.next` always points to the real head of the answer.

The loop runs while either list has nodes remaining **or** a carry exists. On each iteration, the values of `l1` and `l2` are safely extracted defaulting to `0` when a list is exhausted. The digit sum plus carry is computed, then split into the new carry (`sum // 10`) and the current digit (`sum % 10`). A new node is appended and both input pointers advance.

The `or carry` condition in the while loop is the key — without it a final carry (e.g. `5 + 5 = 10`) would be silently dropped.

### Pseudocode
```python
function addTwoNumbers(l1, l2):
carry = 0
dummy_node = new ListNode()
current = dummy_node

while l1 or l2 or carry:
    l1val = l1.val if l1 else 0
    l2val = l2.val if l2 else 0

    sum         = l1val + l2val + carry
    carry       = sum // 10
    digit       = sum % 10
    current.next = new ListNode(digit)
    current      = current.next

    l1 = l1.next if l1 else None
    l2 = l2.next if l2 else None

return dummy_node.next
```
- **Time:** O(max(m, n)) where m and n are the lengths of the two lists
- **Space:** O(max(m, n)) — output list length

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/add_two_numbers.py` |
| TypeScript | `TS/addTwoNumbers.ts` |
| Go | `go/add_two_numbers.go` |

---

## Running Locally

**Python**
```bash
python3 add_two_numbers.py
```

**TypeScript**
```bash
tsx addTwoNumbers.ts
```

**Go**
```bash
go run add_two_numbers.go
```