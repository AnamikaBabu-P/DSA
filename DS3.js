/////////////////////---Binary Tree---------/////////////////
 
// class Node {
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }

// class binaryTree{
//     constructor(){
//         this.root = null
//     }

// //--------------Insert a value--------------------------//

//     insert(value){
//         const newNode = new Node(value)
//         if(!this.root){
//             this.root = newNode
//             return
//         }

//         const queue = [this.root]
//         while(queue.length){
//             const node = queue.shift()
//             if(node.left === null){
//                 node.left = newNode
//                 break;
//             }else{
//                 queue.push(node.left)
//             }
//             if(node.right === null){
//                 node.right = newNode
//                 break;
//             }else{
//                 queue.push(node.right)
//             }
//         }
//     }

// //----------------------search a value ------------------------//

//     searchValue(value){
//        return this.search(this.root,value)
//     }

//     search(node,value){
//         if(!node){
//             return null
//         }

//         if(node.value === value){
//             return node
//         }

//         let found = this.search(node.left,value)
//             if(found){
//                 return found
//             }
//         found = this.search(node.right,value)
//         if(found){
//             return found
//         }
//         return null
//     }

//     print(){
//         console.log(this.root);
//     }
// }

// const bt = new binaryTree()
// bt.insert(10)
// bt.insert(20)
// bt.insert(30)
// bt.insert(40)
// bt.insert(50)
// bt.print()
// console.log(bt.searchValue(20))


/////////////////////-------BST--------------///////////////////

// class Node {
//     constructor(value){
//         this.value  = value
//         this.left = null
//         this.right = null
//     }
// }


// class binarySearchTree {
//     constructor(){
//         this.root = null
//     }

// //------------To check is empty------------//

//     isEmpty(){
//         return this.root === null
//     }

// // -----------------To insert----------------//    

//     insert(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         } else {
//            this.insertNode(this.root,node)
//         }
//     }
//    insertNode(root,node){
//     if(node.value < root.value){
//         if(root.left === null){
//             root.left = node
//         }else{
//             this.insertNode(root.left,node)
//         }
//     }else{
//         if(root.right === null){
//             root.right = node
//         }else{
//             this.insertNode(root.right,node)
//         }
//     }
//    }


//    //-------------------To search---------------------//

//    search(root,value){
//     if(!root){
//         return false
//     }else{
//         if(root.value === value){
//            return root
//         }else if (value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//             }
//         }
//     }

// ////--------------------Bst traversal-------------------/////-    
// //////////------------DFS-------------------//////////
// //---------------preOrder--------------------//

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

// //--------------inOrder-------------------//    

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log((root.value));
//             this.inOrder(root.right)
//         }
//     }

// //--------------postOrder------------------------//    
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

// ///////----BFS--------------------/////
// //---------------levelOrder------------//

//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);

//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//  ////-------------Find the minimum value-------------------////
 
//       min(root){
//           if(!root.left){
//             return root.value
//           }else{
//             return this.min(root.left)
//           }
//       }

//  ////------------------Find the maximum value----------------/////
 
//        max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//        }


//  ////------------Delete a value ---------------------------////

// delete(value){
//     this.root = this.deleteNode(this.root,value)
//    }

//    deleteNode(root,value){
//     if(root === null){
//         return root
//     }
//     if(value < root.value){
//         root.left = this.deleteNode(root.left,value)
//     }else if(value > root.value ){
//         root.right = this.deleteNode(root.right,value)
//     }else{
//         if(!root.left && !root.right){
//             return null
//         }
//         if(!root.left){
//             return root.right
//         }
//         if(!root.right){
//             return root.left
//         }

//         root.value = this.min(root.right)
//         root.right = this.deleteNode(root.right,root.value)
//     }
//     return root
//    }

// //---------------find Largest -----------------------------////
// findLargest(root){
//     while(root.right){
//         root = root.right
//     }
//     return root.value
//    }


// ////----------find Second Largest----------------------////

// findSecondLargest(root){
//     if(!root || !root.left&& !root.right){
//         return null
//     }

//     let parent = null
//     while(root.right){
//         parent = root
//         root = root.right
//     }
//     if(root.left){
//         return this.findLargest(root.left)
//     }
//     return parent.value
//    }

// ////------------find largest with inorder method---------------////

// inOrderFind(root,arr){
//     if(root){
//        this.inOrderFind(root.left,arr)
//        arr.push(root.value)
//        this.inOrderFind(root.right,arr)
//     }
//   }

//   findThirdLargest(root){
//    let arr = []
//    this.inOrderFind(root,arr)
//    if(arr.length<3){
//        return null
//    }else{
//        return arr[arr.length-3]
//    }
//   }

//---------------------Find the closest Value---------------//
// findClosest(target){
 //     return this.findClosestValue(this.root,target,this.root.value)
 // }

// findClosestValue(root,target,closest){
//     if(root === null){
//         return closest
//     }

//     if(Math.abs(target-closest)>Math.abs(target-root.value)){
//         closest = root.value
//     }

//     if(target < root.value){
//         return this.findClosestValue(root.left,target,closest)
//     }else if(target > root.value){
//         return this.findClosestValue(root.right,target,closest)
//     }else{
//         return closest
//     }    
// }


//  }


//------------------Find closest value ----------------------//

// findClosest(target){
//     let closest = this.root.value
//     let curr = this.root
//     while(curr !== null){
//         if(Math.abs(target-closest)>Math.abs(target-curr.value)){
//             closest = curr.value
//         }

//         if(target<curr.value){
//             curr = curr.left
//         }else if(target > curr.value){
//             curr= curr.right
//         }else {
//             break;
//         }
//     }
//     return closest

// }

// //---------------To check is bst-----------------------------//

// isBst(root,min,max){
//     if(root === null){
//         return true
//     }

//     if(root.value <=min || root.value >= max){
//         return false
//     }

//     return(
//         this.isBst(root.left,min,root.value) &&
//         this.isBst(root.right,root.value,max)
//     )
// }

// //--------------------Max Depth------------------------------//
// maxDepth(root){
//     if(root === null){
//         return -1
//     }

//   let leftDepth =  this.maxDepth(root.left)
//   let rightDepth = this.maxDepth(root.right)
//   return Math.max(leftDepth,rightDepth)+1
// }

// //---------------------Maximum Height------------------------//

// Height(root){
//     if(root === null){
//         return -1
//     }
//     let leftHeight = this.Height(root.left)
//     let rightHeight = this.Height(root.right)
//     return Math.max(leftHeight,rightHeight)+1
// }

// //---------------------To check Is balanced-------------------------//

// isBalanced(root){
//     function CheckBalance(root){
//         if(root === null){
//             return 0
//         }

//         let leftHeight = CheckBalance(root.left)
//         if(leftHeight === -1){
//             return -1
//         }
//         let rightHeight = CheckBalance (root.right)
//         if(rightHeight === -1){
//             return -1
//         }

//         if(Math.abs(rightHeight,leftHeight)>1){
//             return -1
//         }

//         return Math.max(rightHeight,leftHeight)+1
//     }
//     return CheckBalance(root) !== -1
// }



// const bst = new binarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(20)
// bst.insert(5)
// bst.insert(30)
// bst.insert(40)

// console.log(bst.isEmpty());

// console.log(bst.search(bst.root,10));
// bst.levelOrder(bst.root)

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.delete(10)

//console.log(bst.findLargest(bst.root))


///////////////////--------------Graph------------------////////////////

// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }

// //-------------- To add new Vertex -------------------------//

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

// //------------------------To add edge between two vertices--------------------//

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//-------------------------------To check edge------------------------//

//     hasEdge(vertex1,vertex2){
//         return (
//           this.adjacencyList[vertex1].has(vertex2) &&
//           this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

// //-----------------------To remove edge----------------------------//

//     edgeRemoval(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

// //------------------------To remove vertex----------------------//

//     vertexRemoval(vertex){
//         if(!this.adjacencyList[vertex]){
//             return null
//         }

//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.edgeRemoval(adjacentVertex,vertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

// //---------------------To display------------------------//

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + '->'+[...this.adjacencyList[vertex]]);
//         }
//     }

// //------------------------BFS--------------------------//

//     bfs(start){
//         let queue = [start]
//         let visited = new Set()
//         let result = []
//         let currentVertex 

//         visited.add(start)
//         while(queue.length){
//             currentVertex = queue.shift()
//             result.push(currentVertex)
//             this.adjacencyList[currentVertex].forEach(neighbor => {
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             });
//         }
//         return result
//     }

// //--------------------------------DFS--------------------------//

//     dfs(start){
//         let stack = [start]
//         let result = []
//         let visited = new Set()
//         let currentVertex

//         visited.add(start)
//         while(stack.length){
//             currentVertex = stack.pop()
//             result.push(currentVertex)

//             this.adjacencyList[currentVertex].forEach(neighbor =>{
//                 if(!visited.has(neighbor)){
//                     visited.add(neighbor)
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result
//     }
// }

// const graph = new Graph()
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');


// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');
//  console.log(graph.hasEdge('A','C'));
//  graph.edgeRemoval('D','E')
//  graph.vertexRemoval('D')

//  console.log(graph.bfs('A'));
//  console.log(graph.dfs('A'));
//  graph.display()

////////////////////////----------HEAP------------////////////////////////

// class MaxHeap {
//     constructor(){
//         this.heap = []
//     }

//     getParent(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeft(index){
//         return index*2+1
//     }

//     getRight(index){
//         return index*2+2
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2] ]=[ this.heap[index2],this.heap[index1]]
//     }

//     getSize(){
//         return this.heap.length
//     }

//     display(){
//         console.log(this.heap);
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)

//     }

//     heapifyUp(index){
//         while(index>0){
//             let parent = this.getParent(index)
//             if(this.heap[index]>this.heap[parent]){
//                 this.swap(index,parent)
//                 index = parent
//             }else{
//                 break
//             }
//         }
       
//     }

//     removeMax(){
//         if(this.heap.length === 0){
//             return null
//         }

//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }

//         let max = this.heap[0]

//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }

//     heapifyDown(index){
//         let length = this.heap.length
//         let largest = index
//         while(index < length){
//             let left = this.getLeft(index)
//             let right = this.getRight(index)
//             if(left<length && this.heap[left] >this.heap[largest]){
//                 largest = left
//             }
//             if(right < length && this.heap[right]>this.heap[largest]){
//                 largest = right
//             }

//             if(largest !== index){
//                 this.swap(largest,index)
//                 largest = index
//             }else {
//                 break;
//             }
//         }
//     }

//     // heapSort(){
//     //     let heap = [...this.heap]
//     //     let sorted = []
//     //     while(this.heap.length >0){
//     //         sorted.push(this.removeMax())
//     //     }
//     //     this.heap = heap
//     //     return sorted
//     // }

//     heapSort(array){
//         array.forEach(value => {
//             this.insert(value)
//         });

//         let sorted = []
//         while(this.heap.length>0){
//             sorted.push(this.removeMax())
//         }
//         return sorted
//     }

    
    
// }

// const maxH = new MaxHeap()
// maxH.insert(10)
// maxH.insert(20)
// maxH.insert(30)
// maxH.display()
// console.log(maxH.getLeft(0));
// console.log(maxH.getParent(1));
// console.log(maxH.getRight(0));
// console.log(maxH.getSize());
// maxH.removeMax()
// maxH.display()
// console.log(maxH.heapSort([3,2,5,4,2,6,8]));


////////////////////------TRIE-------//////////////////////////


// class TrieNode {
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }

//     search(word){
//         let node = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }


//     startsWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }

    // delete(word){
    //     this.deleteWord(this.root,word,0)
    // }

    // deleteWord(node,word,index){
    //     if(index === word.length){
    //         if(!node.isEnd){
    //             return false
    //         }
    //         node.isEnd = false
    //         return Object.keys(node.children).length === 0
    //     }

    //     let char = word[index]
    //     if(!node.children[char]){
    //         return false
    //     }

    //     let shouldDelete = this.deleteWord(node.children[char],word,index+1)
    //     if(shouldDelete){
    //         delete node.children[char]
    //         return Object.keys(node.children).length === 0
    //     }
    //     return false

        
    // }

// }

// class ReverseTrie extends Trie {
     
//     insert(word){
//         let node = this.root
//         let reverseNode = word.split('').reverse().join('')
//        for(let char of reverseNode){
//         if(!node.children[char]){
//              node.children[char] = new TrieNode()
//         }
//         node = node.children[char]
//        }
//        node.isEnd = true
//     }

//     endsWith(suffix){
//         let node = this.root
//         let reversedSuffix = suffix.split('').reverse().join('')
//         for(let char of reversedSuffix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd

//     }


// }

// let trie = new Trie()
// let reversetrie = new ReverseTrie()
// trie.insert('Hello')
// trie.insert('Apple')
// trie.insert('Banana')
// console.log(trie.search('Hello j'));
// console.log(trie.startsWith('He'));

// reversetrie.insert('Hello')
// reversetrie.insert('Apple')
// reversetrie.insert('Banana')

// console.log(reversetrie.endsWith('nana'));

