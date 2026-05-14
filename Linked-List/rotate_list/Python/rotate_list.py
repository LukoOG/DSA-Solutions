from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def build_linked_list(values: list[int]) -> Optional[ListNode]:
    if not values:
        return None
    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def linked_list_to_array(node: Optional[ListNode]) -> list[int]:
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

class Solution:
    def rotateRight(head: Optional[ListNode], k: int)->Optional[ListNode]:
        
        return

if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4, 5], 2),
        ([0, 1, 2], 4),
        ([1], 0),
        ([1, 2], 1),
        ([1, 2, 3], 3),
    ]

    for values, k in test_cases:
        head = build_linked_list(values)
        result = Solution().rotateRight(head, k)
        print(f"Input:       {values}, k={k}")
        print(f"Output:      {linked_list_to_array(result)}")
        print("-" * 35)