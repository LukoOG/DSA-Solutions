class Solution:
    @staticmethod
    def furthestDistanceFromOrigin(moves: str) -> int:
        ace = 0
        distance_from_origin = 0
        
        for move in moves:
            if move == 'L':
                distance_from_origin += 1
            elif move == 'R':
                distance_from_origin -= 1
            else:
                ace += 1
        return abs(distance_from_origin) + ace

if __name__ == "__main__":
    test_cases = [
        "L_RL__R",   # → 3, blanks fill leftward
        "_R__LL_",   # → 5, blanks fill leftward
        "_______",   # → 7, all blanks go one direction
        "LLLLRR",    # → 2, no blanks, pure L/R balance
        "RRRRRR",    # → 6, all right no blanks
        "L",         # → 1, single move
    ]

    for moves in test_cases:
        print(f"Input:       {moves!r}")
        print(f"Output:      {Solution.furthestDistanceFromOrigin(moves)}")
        print("-" * 35)