# https://www.geeksforgeeks.org/insertion-in-a-binary-tree-in-level-order/
# Insertion in a Binary Tree in level order

class Node():
    def __init__(self, data):
        self.value = data
        self.left = None
        self.right = None

''' Depth First Traversals:

            1
          /   \
        2       3
       /  \
      4    5

    Breadth First or Level Order Traversal : 1 2 3 4 5

'''
def printOrder(rootNode):
    if(rootNode is None):
        return
    
    queue = []
    queue.append(rootNode)

    while(len(queue) > 0):
        print(queue[0].value)
        node = queue.pop(0)
        
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)

""" Inorder traversal of a binary tree"""
def inorder(temp): 
  
    if (not temp): 
        return
  
    inorder(temp.left)  
    print(temp.value,end = " ") 
    inorder(temp.right)
    # print("done")

def insert(rootNode, newVal):
    queue = []
    queue.append(rootNode)

    while(len(queue) > 0):
        node = queue[0]
        queue.pop()
        if(node.left is None):
            print("Adding to")
            node.left = Node(newVal)
            break
        else:
            queue.append(node.left)
        
        if(node.right is None):
            node.right = Node(newVal)
            break
        else:
            queue.append(node.right)



# Driver code 
root = Node(1) 
root.left      = Node(2) 
root.right     = Node(3) 
root.left.left  = Node(4) 
root.left.right  = Node(5)

# root = Node(10)  
# root.left = Node(11)  
# root.left.left = Node(7)  
# root.right = Node(9)  
# root.right.left = Node(15)  
# root.right.right = Node(8)  

printOrder(root)
insert(root,6)
print()
printOrder(root)


    
