# Jewels and Stones

**Platform:** LeetCode — [Problem 771](https://leetcode.com/problems/jewels-and-stones/)  
**Difficulty:** Easy  
**Topic:** Hash Set, Strings

---

## Problem

Given a string `jewels` representing types of jewels and a string `stones` representing the stones you have, return how many stones are also jewels. Letters are case sensitive.

**Example:**

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3


---

## Approach — Hash Set Lookup with Language-Specific Optimizations

Build a set from `jewels` for O(1) lookup, then iterate through `stones` counting every character that exists in the set. The two-pass approach — build set, then count — is consistent across all languages, but the implementation details vary meaningfully.

### Language Notes

**Go** — instead of `map[rune]bool`, the jewels map uses `map[rune]struct{}`. An empty struct `struct{}{}` occupies exactly **0 bytes** of memory in Go, making it the idiomatic way to implement a set. A `bool` field would consume 1 byte per entry unnecessarily. The existence check uses the two-value map lookup `_, exists := j[char]` which is the standard Go set membership pattern.

**Rust** — the iterator pipeline `chars().filter().count()` lets the compiler perform aggressive optimisations since iterators carry no-bounds-check guarantees. The function signature accepts `String` to satisfy LeetCode's interface, but the idiomatic Rust version would accept `&str` to avoid unnecessary heap allocation — `&str` is a borrowed view into existing string data whereas `String` always owns and allocates. In production code this distinction matters.

**Python** — uses a generator expression with `set(jewels).__contains__` passed directly to `sum`. Calling `__contains__` explicitly is marginally faster than the `in` operator in a generator context since it avoids the overhead of Python's operator dispatch.

**Fixed-size Boolean Array (Alternative to Hash Set)**

For problems constrained to ASCII or lowercase/uppercase letters, a fixed-size boolean array can replace the hash set entirely. Since there are only 128 ASCII characters, a `[128]bool` array indexed by the character's ASCII value gives O(1) lookup with zero hashing overhead and better cache locality than a hash map.

```go
// Go — fixed size bool array
j := [128]bool{}
for _, char := range jewels {
    j[char] = true
}
count := 0
for _, char := range stones {
    if j[char] {
        count++
    }
}
```

This is faster than both `map[rune]bool` and `map[rune]struct{}` for small character sets because array indexing is a single memory access with no hash computation. The `struct{}` map optimization is still useful for arbitrary key types where a fixed array isn't possible, but for character-based problems the boolean array wins on raw performance.

The same pattern applies in Rust (`[bool; 128]`), TypeScript (`new Uint8Array(128)`),

### Pseudocode
```go
function numJewelsInStones(jewels, stones):
jewel_set = set of all characters in jewels

count = 0
for char in stones:
    if char in jewel_set:
        count++

return count
```
// Rust — iterator pipeline equivalent
```rust
function numJewelsInStones(jewels, stones):
jewel_set = jewels.chars().collect() as HashSet
return stones.chars().filter(c => jewel_set.contains(c)).count()
```

- **Time:** O(j + s) where j and s are the lengths of jewels and stones
- **Space:** O(j)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/jewels_and_stones.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/jewelsAndStones.ts` |
| Go | `go/jewels_and_stones.go` |

---

## Running Locally

**Python**
```bash
python3 jewels_and_stones.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx jewelsAndStones.ts
```

**Go**
```bash
go run jewels_and_stones.go
```