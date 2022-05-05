// data, left, and right pointers
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        //root of a binary search tree
        this.root = null;
    }
    insert(data) {
      // Implement insert method here.
      // initialize new Node with the data
        let newNode = new Node(data);
      // if the root is null 
        if (this.root === null) {
            // then add the node to the tree and make it the root
            this.root = newNode;
        } else {
            // else find the correct position in the tree and add the node
            // Consider using a helper function (EX: insertNode())
            this.insertNode(this.root, newNode);
        }
    }
    remove(data) {
        //implement remove method here.
        // re-intilize the root of the tree with the root of the now modified tree
        this.root = this.removeNode(this.root, data);
    }

    // Helper functions
    // INSERT NODE: moves over the tree to find the location to insert a node w/given data
    insertNode(node, newNode) {
        //if the data is less then the node -> data move left of the tree
        if(newNode.data < node.data) {
            // if left is null insert node here
            if(node.left === null) node.left = newNode;
            // else recur until null is found
            else this.insertNode(node.left, newNode)

        } else {
            //else if data is more that the node -> data move right of the tree
            //if right is null insert node
            if(newNode.data > node.data) {
                if(node.right === null) node.right = newNode;
                //else recur until null is found
                else this.insertNode(node.right, newNode);
            }
        }
    }
    // method to remove a node with given data
    // it recurs over the tree to find the data and removes it
    removeNode(node, key) {
        // if the root is null that the tree is empty and return null
        if(node.data === null) return null;

        // if the data to be deleted (key) is less than the roots data 
        // -> move to the left subtree
        if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }    

        // if the data to be deleted (key) is greater than the roots data
        // -> move to the right subtree
        if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // else when this function finds where the key === the root's data
        // -> delete this node!
        else {
            //if the node has no children 
            if (node.left === null && node.right === null) {
                //set node = null
                node = null;
                return node;
            }
            //if the node has one child
            if (node.left === null) {
                //set node = to the existing child
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }
            //if the node has two children
            //store the minimum node of the right subtree to a temp variable
            //call removeNode again on the right node with the temp.data as the key
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }
    // finds the minimum node in a tree searching from the given node
    findMinNode(node) {
        //if the left of a node is null then you are on the minimum node
        if (node.left === null) return node;
        //else recur with node.left as the input
        else return this.findMinNode(node.left);
    }

    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    
    getRootNode() {return this.root}

    //binary search for a node with given data
    search(node, data) {
        //if tree is empty return null
        if(node === null) return null;
        //if data is less than the node's data -> move left
        else if(data < node.data) return this.search(node.left, data);
        //if data is greater than the node's data -> move right
        else if(data > node.data) return this.search(node.right, data);
        //if data us equal to the node data -> return it!
        else return node;
    }

    // preorder(fn, curr = this.root) {
    //     if (curr === null) return;
    //     fn(curr.data);
    //     this.preorder(fn, curr.left);
    //     this.preorder(fn, curr.right);
    // }
    // toArray() {
    //     const structure = [];
    //     this.depthFirst((node) => {
    //         structure.push({
    //             data: node.data,
    //             children: [].concat(
    //                 node.left ? node.left.data : [],
    //                 node.right ? node.right.data : []
    //             ),
    //     });
    //     });
    //     return structure;
    // }
}

const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let root = BST.getRootNode();
// console.log("root:", root);
console.log("Initial Tree")
BST.inorder(root); //Should print 5 7 9 10 13 15 17 22 25 27

// Removing node with no children
BST.remove(5);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

root = BST.getRootNode();
console.log("Removed node with no children");
BST.inorder(root); // prints 7 9 10 13 15 17 22 25 27

// Removing node with one child
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

root = BST.getRootNode();
console.log("removed node with one child");
BST.inorder(root); // prints 9 10 13 15 17 22 25 27

// Removing node with two children
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

root = BST.getRootNode();
console.log("removed node with two children");
console.log("inorder traversal");
BST.inorder(root); // prints 9 10 13 17 22 25 27

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

// console.log(BST);
// export default BinarySearchTree;