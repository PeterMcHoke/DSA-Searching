const Queue = require('../stacks-queues/Queue')

const binarySearch = (arr, value, start, end) => {
    const start = (start === undefined ? 0 : start)
    const end = (end === undefined ? 0 : end)

    //if we are ever out of bounds, we didn't find the element
    if (start > end)
        return -1
    
    const index = Math.floor((start + end) / 2)
    const item = arr[index];

    if (item === value)
        return item
    else if (item < value) {
        //if our current item is less than the value we are looking for, set our search parameters to one element to the right and keep the end. 
        //by calling BST recursively we will find the new index between index +1 and end and then run the same calculations...
        //returning item whenever item === value
        return binarySearchTree(arr, value, index + 1, end)
    }
    else if (item > value) {
        return binarySearchTree(arr, value, start, index - 1)
    }
}

//Depth first search is the idea of traversing down a branch until you reach a node that has no children, and then backtracking. 
//Here we are going to implement an in-order traversal that looks to see if a node has a left or right child, if not push the current node's value to our array that is tracking
//our nodes. If so, call the function recursively until it reaches a leaf node.
const DFS = (values = []) => {
    if (this.left) {
        values = this.left.DFS(values)
    }
    values.push(this.value);
    if (this.right) {
        values = this.right.DFS(values)
    }
    return values;
}

const BFS = (tree, values = []) => {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(node);
        values.push(node.value)
        if (node.left) {
            queue.enqueue(node.left)
        }
        if (node.right) {
            queue.enqueue(node.right)
        }
    }
    return values;
}