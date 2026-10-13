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
    def deleteDuplicates(head: ListNode | None) -> ListNode | None:
        curr = head
        while curr and curr.next:
            if curr.val == curr.next.val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return head

if __name__ == "__main__":
    test_cases = [
        [1, 1, 2],            # → [1, 2]
        [1, 1, 2, 3, 3],      # → [1, 2, 3]
        [1, 2, 3],            # → [1, 2, 3], no duplicates
        [1, 1, 1, 1],         # → [1], all duplicates
        [1],                  # → [1], single element
        [],                   # → [], empty list
    ]

    for values in test_cases:
        head = build_linked_list(values)
        result = Solution().deleteDuplicates(head)
        print(f"Input:       {values}")
        print(f"Output:      {linked_list_to_array(result)}")
        print("-" * 35)