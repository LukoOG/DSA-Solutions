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
    def addTwoNumbers(l1: ListNode | None, l2: ListNode | None) -> ListNode | None :
        carry = 0
        dummy_node = ListNode()
        current = dummy_node
        while l1 or l2 or carry:
            l1value = l1.val if l1 else 0
            l2value = l2.val if l2 else 0
            
            sum = l1value + l2value + carry
            
            carry, digit = sum // 10, sum % 10
            
            current.next = ListNode(digit)
            current = current.next
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy_node.next
        

if __name__ == "__main__":
    test_cases = [
        ([2, 4, 3], [5, 6, 4]),        # → [7, 0, 8],  342 + 465 = 807
        ([0], [0]),                     # → [0],         0 + 0 = 0
        ([9, 9, 9, 9], [9, 9, 9]),     # → [8,9,9,0,1], 9999 + 999 = 10998
        ([1], [9, 9]),                  # → [0, 0, 1],   1 + 99 = 100
        ([5], [5]),                     # → [0, 1],      5 + 5 = 10, carry test
    ]

    for l1_vals, l2_vals in test_cases:
        l1 = build_linked_list(l1_vals)
        l2 = build_linked_list(l2_vals)
        result = Solution().addTwoNumbers(l1, l2)
        print(f"Input:       {l1_vals} + {l2_vals}")
        print(f"Output:      {linked_list_to_array(result)}")
        print("-" * 35)