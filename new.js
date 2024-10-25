//isempty
//insert
//search
//pre,in,postorder

//level
//min, max
//delete
//largest
//closest

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            return insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left = node
            }else{
                return this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                return this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return null
        }
        if(root.value === value){
            return root
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            console.log(root.value);
            this.postOrder(root.right)   
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.pop()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root
        }else{
            this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root
        }else{
            this.max(root.right)
        }
    }

    delete(value){
        
    }
}