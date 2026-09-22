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
    def isPalindrome(head: Optional[ListNode]) -> bool:
        if head is None or head.next is None:
            return True
        middle = head
        end = head
        #Find the middle
        while end and end.next:
            middle = middle.next
            end = end.next.next
        #reverse in place
        prev = None
        curr = middle
        next = None
        while curr is not None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        #compare both pointers
        while prev:
            if prev.val != head.val:
                return False
            prev = prev.next
            head = head.next
        return True

if __name__ == "__main__":
    test_cases = [
        [1, 2, 2, 1],     # → True,  even length palindrome
        [1, 2, 3, 2, 1],  # → True,  odd length palindrome
        [1, 2],           # → False, two elements not palindrome
        [1, 2, 3],        # → False, odd length not palindrome
        [1],              # → True,  single element
        [1, 1],           # → True,  two equal elements
    ]

    for values in test_cases:
        head = build_linked_list(values)
        print(f"Input:       {values}")
        print(f"Output:      {Solution().isPalindrome(head)}")
        print("-" * 35)