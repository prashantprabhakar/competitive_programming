#  https://www.geeksforgeeks.org/level-order-tree-traversal/

# Level Order Tree Traversal or Breadth First Traversal


class Node:
    
    # A utility function to create a new node 
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

# Function to  print level order traversal of tree
def printLevelOrder(root):
    h = height(root)
    for i in range(1, h+1): 
        printGivenLevel(root, i)


'''

            1
          /   \
        2       3
       /  \
      4    5
     / \   / \
    6   7 8   9

'''
    

# Print nodes at a given level
def printGivenLevel(root, level):
    if root is None:
        return
    
    if(level == 1):
        print(root.value)
    
    elif(level > 1):
        printGivenLevel(root.left, level-1)
        printGivenLevel(root.right, level -1)



# Compute the height of a tree--the number of nodes along the longest path from the root node down to the farthest leaf node
def height(node):
    if(node is None):
        return 0
    else:
        lheight = height(node.left)
        rheight = height(node.right)
        #  pick the larget of both
        return lheight > rheight and lheight+1 or rheight+1


# Optimized approach using queue
def printLevelOrder2(rootNode):
    # handle base case
    if(rootNode is None):
        return
    
    queue = []
    # Enqueue Root and initialize height
    queue.append(rootNode)

    while(len(queue) > 0):
        # Print front of queue and remove it from queue
        print(queue[0].value)
        node = queue.pop(0)
        #Enqueue left child 
        if node.left is not None:
            queue.append(node.left)
        # Enqueue right child
        if node.right is not None:
            queue.append(node.right)

# Driver program to test above function 
root = Node(1) 
root.left = Node(2) 
root.right = Node(3) 
root.left.left = Node(4) 
root.left.right = Node(5)
root.left.left.left = Node(6)
root.left.left.right = Node(7)
root.left.right.left = Node(8)
root.left.right.right = Node(9)
  
print "Level order traversal of binary tree is -"
printLevelOrder(root)