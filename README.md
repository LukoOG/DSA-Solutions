# 🧠 Data Structures & Algorithms – Multi-Language Practice

This repository documents my journey solving Data Structures and Algorithms (DSA) problems, with each problem solved in several programming languages:

* 🐍 Python
* 🟨 TypeScript
* 🦀 Rust
* 🔵 Go (added September 2026, so earlier problems may not have a Go solution yet)

My goal isn't just to solve problems, but to understand how different languages approach the same concepts while getting accustomed to their syntax.

---

## 🔍 Start here: optimization notes

The same algorithm doesn't always perform the same way in every language. [optimization.md](optimization.md) is a running set of case studies on the differences I've found while porting solutions, for example:

* Counting set bits: why a manual Brian Kernighan loop is fine in Go and Rust but loses to `int.bit_count()` in Python
* Loop and allocation overhead in a simple string problem
* `Option` types versus explicit empty checks when popping from a stack
* `.chars()` versus `.as_bytes()` when iterating over a string in Rust

If you only read one file in this repository, read that one.

---

## 🎯 Objectives

* Strengthen my problem-solving and algorithmic thinking
* Compare language paradigms and trade-offs
* Build fluency across Python, TypeScript, Rust and Go
* Learn to write clean, efficient, and idiomatic code in each language

---

## 📂 Repository Structure

Problems are grouped by topic: [Arrays](Arrays), [Strings](Strings), [Linked-List](Linked-List), [Numbers](Numbers), [Matrices](Matrices), [Hashmaps](Hashmaps), [Geometry](Geometry) and [Misc](Misc).

Each problem has its own folder:

```
problem-name/
├── python/
│   └── solution.py
├── ts/
│   └── solution.ts
├── rust/
│   └── (Cargo project)
├── go/
│   └── solution.go
└── readme.md
```

* Each language folder contains an implementation of the same problem
* The problem's `readme.md` covers the approach, pseudocode, and time and space complexity
* Not every problem is solved in all four languages yet

---

## ▶️ Running a solution

Each solution is a standalone file with its own test cases, so it runs directly from its folder:

| Language   | Command                                                    |
| ---------- | ---------------------------------------------------------- |
| Python     | `python3 solution.py`                                      |
| TypeScript | `npx tsx solution.ts`                                      |
| Rust       | `cargo run`                                                |
| Go         | `go run solution.go`                                       |

Replace `solution` with the actual file name in that folder.

---

## ⚖️ My Language Perspectives

| Language   | Focus                                             |
| ---------- | ------------------------------------------------- |
| Python     | Simplicity & speed of writing                     |
| TypeScript | Type safety & structure                           |
| Rust       | Performance & memory safety without a GC          |
| Go         | Performance with a simple, garbage-collected core |

---
