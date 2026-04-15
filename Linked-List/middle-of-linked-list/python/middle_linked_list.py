#Solution 2: using 2 pointers
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

#helper functions
def build_linked_list(values: list[int]) -> ListNode:
    if not values:
        return None
    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def linked_list_to_array(node: ListNode) -> list[int]:
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result


class Solution:
    @staticmethod
    def middleNode(head: Optional[ListNode]) -> Optional[ListNode]:
        middle_node = head
        end_node = head
        
        while end_node is not None and end_node.next is not None:
            end_node = end_node.next.next
            middle_node = middle_node.next
        return middle_node

if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4, 5],   # odd length  → [3, 4, 5]
        [1, 2, 3, 4, 5, 6], # even length → [4, 5, 6]
        [1],                # single node → [1]
        [1, 2],             # two nodes   → [2]
    ]

    for values in test_cases:
        head = build_linked_list(values)
        result = Solution.middleNode(head)
        print(f"Input:       {values}")
        print(f"Output:      {linked_list_to_array(result)}")
        print("-" * 35)