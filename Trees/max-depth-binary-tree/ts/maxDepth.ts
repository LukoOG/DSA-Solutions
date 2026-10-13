export {}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function buildTree(values: (number | null)[]): TreeNode | null {
    if (!values.length || values[0] === null) return null;
    const root = new TreeNode(values[0]!);
    const queue = [root];
    let i = 1;
    while (queue.length && i < values.length) {
        const node = queue.shift()!;
        if (i < values.length && values[i] !== null) {
            node.left = new TreeNode(values[i]!);
            queue.push(node.left);
        }
        i++;
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]!);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

const testCases: (number | null)[][] = [
    [3, 9, 20, null, null, 15, 7],
    [1, null, 2],
    [],
    [1],
    [1, 2, 3, 4, 5],
];

for (const values of testCases) {
    const root = buildTree(values);
    console.log(`Input:       ${JSON.stringify(values)}`);
    console.log(`Output:      ${maxDepth(root)}`);
    console.log("-".repeat(35));
}