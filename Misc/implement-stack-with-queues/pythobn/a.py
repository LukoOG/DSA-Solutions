from collections import deque

class MyStack:

    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        size = len(self.q)
        self.q.append(x)
        for _ in range(size):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()        

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0

if __name__ == "__main__":
    test_cases = [
        {
            "ops":  ["push", "push", "top", "pop", "empty"],
            "args": [[1],    [2],    [],    [],    []],
            "expected": [None, None, 2, 2, False]
        },
        {
            "ops":  ["push", "empty", "pop", "empty"],
            "args": [[5],    [],      [],    []],
            "expected": [None, False, 5, True]
        },
        {
            "ops":  ["push", "push", "push", "pop", "top", "pop", "empty"],
            "args": [[1],    [2],    [3],    [],    [],    [],    []],
            "expected": [None, None, None, 3, 2, 2, False]
        },
    ]

    for case in test_cases:
        stack = MyStack()
        results = []
        for op, arg in zip(case["ops"], case["args"]):
            if arg:
                results.append(getattr(stack, op)(*arg))
            else:
                results.append(getattr(stack, op)())
        print(f"Ops:         {case['ops']}")
        print(f"Args:        {case['args']}")
        print(f"Output:      {results}")
        print(f"Expected:    {case['expected']}")
        print("-" * 35)