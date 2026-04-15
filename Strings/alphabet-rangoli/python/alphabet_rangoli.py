import string

c = {(i + 1): char for i, char in enumerate(string.ascii_lowercase)}


def print_rangoli(size: int) -> str:
    # Bottom rows from  1 -> N(size)+1
    top_half = []
    bottom_half = []
    # top
    if size is None or size < 0 or size > 26:
        return ""

    for i in range(1, size):
        left_padding = right_padding = "-" * (
            (2 * size) - (2 * i)
        )  # replace size with size
        mid_char = c[(size + 1) - i]
        right_letters = "".join(
            [c[size + j - i + 1] for j in range(1, i)]
        )  # i-1 is 1 in code
        left_letters = "".join([c for c in right_letters[::-1]])
        characters = "-".join([c for c in (left_letters + mid_char + right_letters)])
        total = left_padding + characters + right_padding
        top_half.append(total)

    # bottom
    for i in range(1, size):
        left_padding = right_padding = "-" * 2 * i
        mid_char = c[i + 1]
        right_letters = "".join(
            [c[j + i + 1] for j in range(1, (size - i))]
        )  # N - 1 - i is N - 1 in code
        left_letters = "".join([c for c in right_letters[::-1]])
        characters = "-".join([c for c in (left_letters + mid_char + right_letters)])
        total = left_padding + characters + right_padding
        bottom_half.append(total)

    # middle
    middle_right_letters = "".join(
        [c[j] for j in range(2, size + 1)]
    )  # we start from 2 to omit a
    middle_left_letters = "".join(c for c in middle_right_letters[::-1])
    middle_row = "-".join(middle_left_letters + c[1] + middle_right_letters)
    if top_half:
        print(*top_half, sep="\n")

    print(middle_row)

    if bottom_half:
        print(*bottom_half, sep="\n")


if __name__ == "__main__":
    n = int(input("Enter size of the pattern: "))
    print_rangoli(n)
    # testcases = list(range(0, 28))
    # for t in testcases:
    #     print_rangoli(0)
    # print_rangoli(size=None)
