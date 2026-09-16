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
    @staticmethod
    def deleteMiddle (head: Optional[ListNode]) -> Optional[ListNode]:
        return build_linked_list([1])

if __name__ == "__main__":
    test_cases = [
        [1, 3, 4, 7, 1, 2, 6],   # → [1, 3, 4, 1, 2, 6], odd length
        [1, 2, 3, 4],             # → [1, 2, 4], even length
        [2, 1],                   # → [2], two elements
        [1],                      # → [], single element
        [1, 2, 3],                # → [1, 3], odd length simple
    ]

    for values in test_cases:
        head = build_linked_list(values)
        result = Solution().deleteMiddle(head)
        print(f"Input:       {values}")
        print(f"Output:      {linked_list_to_array(result)}")
        print("-" * 35)