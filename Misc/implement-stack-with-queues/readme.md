# Implement Stack using Queues

**Platform:** LeetCode — [Problem 225](https://leetcode.com/problems/implement-stack-using-queues/)  
**Difficulty:** Easy  
**Topic:** Stack, Queue, Design

---

## Problem

Implement a last-in-first-out (LIFO) stack using only queue operations. The implemented stack must support `push`, `pop`, `top`, and `empty`.

**Example:**

Input: ["push", "push", "top", "pop", "empty"]
[[1], [2], [], [], []]
Output: [null, null, 2, 2, false]


---

## Approach — Single Queue with Rotation

A queue is FIFO but a stack is LIFO — the trick is to maintain the queue so that the most recently pushed element is always at the front. This is achieved by rotating the queue on every push.

When a new element `x` is pushed, it is appended to the back of the queue normally. Then every element that was already in the queue — all `size` of them — is dequeued from the front and re-enqueued at the back. This cycles all the older elements behind `x`, leaving `x` at the front. From here `pop` and `top` are trivially O(1) since the correct element is always at the front.

The trade-off is that `push` becomes O(n) while `pop`, `top`, and `empty` are all O(1).

### Pseudocode
```
class MyStack:
q = empty deque

function push(x):
    size = length of q
    q.append(x)
    for _ in range(size):
        q.append(q.popleft())   // rotate older elements behind x

function pop():
    return q.popleft()

function top():
    return q[0]

function empty():
    return length of q == 0
```
- **Time:** push O(n), pop O(1), top O(1), empty O(1)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/implement_stack.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/implementStack.ts` |
| Go | `go/implement_stack.go` |

---

## Running Locally

**Python**
```bash
python3 implement_stack.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx implementStack.ts
```

**Go**
```bash
go run implement_stack.go
```