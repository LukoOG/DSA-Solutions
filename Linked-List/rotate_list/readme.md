# Rotate List

**Platform:** LeetCode — [Problem 61](https://leetcode.com/problems/rotate-list/)  
**Difficulty:** Medium  
**Topic:** Linked Lists, Two Pointers

---

## Problem

Given the head of a linked list and an integer `k`, rotate the list to the right by `k` places.

**Example:**

Input: head = [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]


---

## Approach — Length + Tail Connection

First traverse the list to find its length and reach the tail. Since rotating by a multiple of the length is a no-op, reduce `k` with `k % length` and return early if it becomes zero.

The key insight is that rotating right by `k` is equivalent to making the list circular by connecting the tail back to the head, then finding the new break point. The new tail sits at position `length - k - 1` from the original head — everything before and including it stays, everything after becomes the new head. The new tail's next pointer is set to `None` to break the circle.

### Pseudocode
```
function rotateRight(head, k):
if head is null or head.next is null or k == 0:
return head

tail = head
length = 1
while tail.next is not null:
    tail = tail.next
    length++

k = k % length
if k == 0:
    return head

tail.next = head        // make circular

new_tail_pos = length - k - 1
for _ in range(new_tail_pos):
    head = head.next    // walk to new tail

new_head = head.next
head.next = null        // break the circle
return new_head
```
- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/rotate_list.py` |
| TypeScript | `TS/rotateList.ts` |
| Rust | `rust/src/main.rs` |
| Go | `go/rotate_list.go` |

---

## Running Locally

**Python**
```bash
python3 rotate_list.py
```

**TypeScript**
```bash
tsx rotateList.ts
```

**Rust**
```bash
cargo run
```

**Go**
```bash
go run rotate_list.go
```