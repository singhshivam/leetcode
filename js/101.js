// https://leetcode.com/problems/symmetric-tree/
var isSymmetric = function(root) {
    if (!root) return true;
    let queue = [];
    queue.push(root, root);
    while (queue.length) {
        let node1 = queue.shift(), node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.push(node1.left, node2.right);
        queue.push(node1.right, node2.left);
    }
    return true;
};
