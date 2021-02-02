const Queue = require('../stacks-queues/Queue')
const BST = require('../binary-search-trees/BST')

const binarySearch = (arr, value, start, end) => {
    var start = (start === undefined ? 0 : start)
    var end = (end === undefined ? arr.length : end)
    console.table(arr.slice(start, end+1))
    //if we are ever out of bounds, we didn't find the element
    if (start > end)
        return -1
    //So you always land on the value at the end of the fist half
    const index = Math.floor((start + end) / 2)
    const item = arr[index];

    if (item === value)
        return item
    else if (item < value) {
        //if our current item is less than the value we are looking for, set our search parameters to one element to the right and keep the end. 
        //by calling BST recursively we will find the new index between index +1 and end and then run the same calculations...
        //returning item whenever item === value
        return binarySearch(arr, value, index + 1, end)
    }
    else if (item > value) {
        return binarySearch(arr, value, start, index - 1)
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

function commandStructure() {
    const bst = new BST(5, 'Captain Picard');

    bst.insert(3, 'Commander Riker');
    bst.insert(6, 'Data');
    bst.insert(2, 'Worf');
    bst.insert(4, 'Laforge');
    bst.insert(1, 'security-officer');
    bst.insert(8, 'Crusher');
    bst.insert(7, 'Selar');
    return bst.bfs([]);
}

function maxProfit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}


const main = (() => {
    const list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
    //1. How many searches?
    //binarySearch(list, 8); // 3 recursive calls before returning 8
    //binarySearch(list, 16);

    const tree = new BST();
    const data = ['25', '15', '50', '10', '24', '35', '70', '4','12', '18', '31', '44','66', '90', '22']
    data.forEach(num => tree.insert(parseInt(num)))
    // tree.printInOrder();
    // tree.printInOrder();
    // tree.printPreOrder();
    // tree.printPostOrder();
    console.log(commandStructure())

    console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))
})()