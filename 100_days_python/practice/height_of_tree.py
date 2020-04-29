# self

#  finf the height of a tree

class Node:

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

def findHeight(node):
    if(node is None):
        return 0
    else:
        lheight = findHeight(node.left)
        rheight = findHeight(node.right)
        if(lheight > rheight): return lheight + 1
        else: return rheight + 1

root = Node(1) 
root.left = Node(2) 
root.right = Node(3) 
root.left.left = Node(4) 
root.left.right = Node(5)
root.left.left.left = Node(6)
root.left.left.right = Node(7)
root.left.right.left = Node(8)
root.left.right.right = Node(9)

h = findHeight(root)
print(h)
