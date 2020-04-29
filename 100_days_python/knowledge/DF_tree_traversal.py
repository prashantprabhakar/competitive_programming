# https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

''' Depth First Traversals:

            1
          /   \
        2       3
       /  \
      4    5

(a) Inorder (Left, Root, Right) : 4 2 5 1 3
(b) Preorder (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

Breadth First or Level Order Traversal : 1 2 3 4 5

'''

class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

# A function to do inorder tree traversal 
def printInOrder(root):
    if root:
        printInOrder(root.left)
        print(root.value)
        printInOrder(root.right)

# A function to do preOrder tree traversal 
def printPreorder(root):
    if root:
        print(root.value)
        printPreorder(root.left)
        printPreorder(root.right)

# A function to do postOrder tree traversal 
def printPostorder(root):
    if root:
        printPostorder(root.left)
        printPostorder(root.right)
        print(root.value)




# Driver code 
root = Node(1) 
root.left      = Node(2) 
root.right     = Node(3) 
root.left.left  = Node(4) 
root.left.right  = Node(5) 
print("Preorder traversal of binary tree is")
printInOrder(root) 

print("\nPreorder traversal of binary tree is")
printPreorder(root)

print("\nPostorder traversal of binary tree is")
printPostorder(root) 


