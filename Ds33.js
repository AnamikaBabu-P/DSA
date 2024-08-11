// 3rd week


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(!this.root){
//             this.root = newNode;
//             return 
//         }
//         const queue = [this.root]
//         while(queue.length){
//             const node = queue.shift()
//             if(node.left === null){
//                 node.left = newNode;
//                 break;
//             }else{
//                 queue.push(node.left)
//             }
//             if(node.right === null){
//                 node.right = newNode;
//                 break;
//             }else{
//                 queue.push(node.right)
//             }
//         }
//     } 

//     searchValue(value){
//         return this.search(this.root,value)
//     }

//     search(node,value){
//         if(!node){
//             return null
//         }
//         if(node.value === value){
//             return node
//         }
//         let found = this.search(node.left,value)
//         if(found){
//             return found
//         }

//         found = this.search(node.right,value)
//         if(found){
//             return found
//         }
//         return null
//     }

//     //power Of Two

//     PowerOfTwo(){
//         const results=[]
//         this.power(this.root, results)
//         return results
//     }
//     power(root,results){
//         if(!root){
//             return null
//         }
//         if(this.powerPower(root.value)){
//             results.push(root.value)
//         }
//         this.power(root.left,results)
//         this.power(root.right,results)
//     }

//     powerPower(n){
//         if(n<=0){
//             return false
//         }
//         if(n===1){
//             return true
//         }
//         if(n%2!==0){
//             return false
//         }
//         return this.powerPower(n/2)
//     }
//     print(){
//         console.log(this.root);
//     }
// }

// const bt=new BinaryTree()
// bt.insert(4)
// bt.insert(6)
// bt.insert(8)
// bt.insert(16)
// bt.insert(5)
// bt.print()
// console.log(bt.searchValue(8));
// console.log(bt.PowerOfTwo());


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }

//     isempty(){
//         return this.root===null
//     }


//     insert(value){
//         const newNode=new Node(value)
//         if(this.isempty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//         if(root.value===value){
//             return true
//         }else if(value<root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }
//     }
//     print(){
//         console.log(this.root)
//     }


//     // dfs

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left)
//             console.log(root.value);
//             this.InOrder(root.right)
//         }
//     }

//     PostOrder(root){
//         if(root){
//             this.PostOrder(root.left)
//             this.PostOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     levelOrder(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!this.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }


//     Delete(value){
//         this.root= this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }else if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right).value
//             root.right =this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// //second Largest

//    findLargest(root){
//     while(root.right!==null){
//         root=root.right
//     }
//     return root
//    } 

//    findSecondLargest(root){
//     if(!root||(root.left===null&&root.right===null)){
//         return null
//     }
//     let parent=null
//     while(root.right){
//         parent=root
//         root=root.right
//     }
//     if(root.left){
//         return this.findLargest(root.left).value
//     }
//     return parent.value
//    }


// //    thirdLargest
//    third(root,arr){
//     if(root){
//         this.third(root.left,arr)
//         arr.push(root.value);
//         this.third(root.right,arr)
//     }
// }
// findThird(){
//     let arr=[]
//     this.third(this.root,arr)
//     if(arr.length<3){
//         return null
//     }
//     return arr[arr.length-3]
// }


// // secondLargest
// INorder(root,a){
//     if(root){
//         this.INorder(root.left,a)
//         a.push(root.value)
//         this.INorder(root.right,a)
//     }
// }
// findSecond(){
//     let a=[]
//     this.INorder(this.root,a)
//     if(a.length<2){
//         return 
//     }
//     return a[a.length-2]
// }

// //closest
// findClosestValue(target){
//     return this.findClosest(this.root,target,this.root.value)  
// }

// // findClosest(root,target,closest){
// //     if(root===null){
// //         return closest
// //     }
// //     if(Math.abs(target-closest)>Math.abs(target-root.value)){
// //         closest=root.value
// //     }
// //     if(target<root.value){
// //         return this.findClosest(root.left,target,closest)
// //     }else if(target>root.value){
// //         return this.findClosest(root.right,target,closest)
// //     }else{
// //         return closest
// //     }
// // }

// findClosest(target){
//     let closest=this.root.value
//     let curr=this.root
//     while(curr!==null){
//     if(Math.abs(target-closest)>Math.abs(target-curr.value)){
//         closest=curr.value
//     }
//     if(target<curr.value){
//         curr=curr.left
//     }else if(target>curr.value){
//         curr=curr.right
//     }else{
//         break;
//     }
// }
// return closest
// }


// bst(){
//     return this.isbst(this.root,-Infinity,Infinity)
// }

// isbst(root,min,max){
//     if(root===null){
//         return true
//     }
//     if(root.value <= min||root.value >= max){
//         return false
//     }
//     return (
//         this.isbst(root.left,min,root.value)&&
//         this.isbst(root.right,root.value,max)
//     )
// }


// maxDepth(root){
//     if(root===null){
//         return 0
//     }
//     let leftDeapth=this.maxDepth(root.left)
//     let rightDeapth=this.maxDepth(root.right)
//     return Math.max(leftDeapth,rightDeapth)+1
// }



// height(root){
//     if(root === null){
//         return -1
//     }
//     let leftHeight=this.height(root.left)
//     let rightHeight=this.height(root.right)
//     return Math.max(leftHeight,rightHeight)+1
// }

// isBalanced(root){
//     function CheckBalance(root){
//         if(root===null){
//             return 0
//         }
//         const leftHeight=CheckBalance(root.left)
//         if(leftHeight===-1){
//             return -1
//         }
//         const rightHeight=CheckBalance(root.right)
//             if(rightHeight===-1){
//                 return -1
            
//         }
//         if(Math.abs(leftHeight,rightHeight)>1){
//             return -1
//         }
//         return Math.max(leftHeight,rightHeight)+1
//     }
//     return CheckBalance(root)!==-1
// }

// }




// const bst=new BinarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)
// bst.insert(4)
// bst.insert(2)
// bst.insert(6)
// bst.print()
// console.log(bst.search(bst.root,7));
// bst.preOrder(bst.root)
// bst.InOrder(bst.root)
// bst.PostOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root));
// bst.Delete(6)
// bst.levelOrder()
// console.log(bst.findSecondLargest(bst.root));
// console.log(bst.third(bst.root));
// bst.findThird()
// console.log(bst.findThird());
// console.log(bst.findSecond());
// console.log(bst.findClosest(6));
// console.log(bst.maxDepth(bst.root));
// console.log(bst.height(bst.root));
// console.log(bst.isBalanced(bst.root));



// Graph

// class Graph{
//     constructor(){
//         this.adjucencyList={}
//     }

//     AddVertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             this.adjucencyList[vertex]=new Set()
//         }
//     }

//     AddEdge(vertex1,vertex2){
//         if(!this.adjucencyList[vertex1]){
//             this.AddVertex(vertex1)
//         }
//         if(!this.adjucencyList[vertex2]){
//             this.AddVertex(vertex2)
//         }
//         this.adjucencyList[vertex1].add[vertex2]
//         this.adjucencyList[vertex2].add[vertex1]

//     }

    // hasEdge(vertex1,vertex2){
    //     return 
    //     (this.adjucencyList[vertex1].has(vertex2)&&
    //     this.adjucencyList[vertex2].has(vertex1))
    // }

//     EdgeRemoval(vertex1,vertex2){
//         this.adjucencyList[vertex1].delete(vertex2)
//         this.adjucencyList[vertex2].delete(vertex1)
//     }

//     VertexRemove(vertex){
//         if(!this.adjucencyList[vertex]){
//             return null
//         }
//         for(let adjucentVertex of this.adjucencyList[vertex]){
//             this.EdgeRemoval(adjucentVertex,vertex)
//         }
//         delete this.adjucencyList[vertex]
//     }



//     bfs(start){
//         let queue=[start]
//         let visited=new Set()
//         let result=[]
//         let currentVertex

//         visited.add(start)
//         while(queue.length){
//             currentVertex=queue.shift()
//             result.push(currentVertex)

//             this.adjucencyList[vertex].forEach(e=>{
//                 if(!visited.has(e)){
//                     visited.add(e)
//                     queue.push(e)
//                 }
//             })
//         }
//         return result
//     }


//     dfs(start){
//         const result=[]
//         let visited=new Set{}
//         let stack=[start]
//         let currentVertex

//         visited.add(start)
//         while(stack.length){
//             currentVertex=stack.pop()
//             result.push(currentVertex)

//             this.adjucencyList[vertex].forEach(e=>{
//                 if(!visited.has(e)){
//                     visited.add(e)
//                     stack.push(e)
//                 }
//             })
//         }
//         return result
//     }
// }

//Maxheap

// class MaxHeap {
//     constructor(){
//         this.heap=[]
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

//     getSize(){
//         return this.heap.length
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     insert(value){ 
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parent=this.getParent(index)
//             if(this.heap[index]>this.heap[parent]){
//                 this.swap(index,parent)
//             }else{
//                 break
//             }
//         }
//     }
//     removeMax(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }

//     heapifyDown(index){
//         let length = this.heap.length
//         let largest = index
//         while(index > 0){
//             let left=this.getLeft(index)
//             let right=this.getRight(index)

//             if(left<length&&this.heap[left]>this.heap[largest]){
//                 largest=left
//             }
//             if(right<length&&this.heap[right]>this.heap[largest]){
//                 largest=right
//             }

//             if(largest!==index){
//                 this.swap(largest,index)
//                 index=largest
//             }else{
//                 break
//             }
               
//         }

//     }
// }

// const maxh=new MaxHeap()
// // console.log(maxh.isEmpty());
// maxh.insert(4)
// maxh.insert(15)
// maxh.insert(3)
// maxh.insert(8)
// maxh.insert(5)
// console.log(maxh);
// // console.log(maxh.isEmpty());
// console.log(maxh.getSize());
// console.log(maxh.removeMax());


// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return (index-1)/2
//     }

//     getLeft(index){
//         return index*2+1
//     }

//     getRight(index){
//         return index*2+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         while(index>0){
//             const parent=this.getParent(index)
//             if(this.heap[index]>this.heap[parent]){
//                 this.swap(index,parent)
//             }else{
//                 break
//             }
//         }
//     }
//     removeMax(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         let max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }

//     heapifyDown(index){
//         let length=this.heap.length
//         let largest=index
//         while(index>0){
//             let left=this.getLeft(index)
//             let right=this.getRight(index)

//             if(left<length&&this.heap[left]>this.heap[largest]){
//                 largest=left
//             }
//             if(right<length&&this.heap[right]>this.heap[largest]){
//                 largest=right
//             }
//             if(largest!==index){
//                 this.swap(largest,index)
//                 index=largest
//             }else{
//                 break
//             }
//         }

//     }
//     heapSort(){   
//         const sorted=[]
//         const heap=[...this.heap]
//         while(this.heap.length>0){
//             sorted.push(this.removeMax())
//         }
//         this.heap=heap
//         return sorted
//     }

    // heapSort(array) {
    //     array.forEach(value => this.insert(value));
    //     const sortedArray = [];
    //     // Extract elements from the heap and build the sorted array
    //     while (this.heap.length > 0) {
    //         sortedArray.push(this.removeMax());
    //     }
    //     return sortedArray;
    // }

// }

// const maxHeap = new MaxHeap();
// maxHeap.insert(4);
// maxHeap.insert(15);
// maxHeap.insert(3);
// maxHeap.insert(8);
// maxHeap.insert(5);

// trie

// class trieNode{
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new trieNode()
//     }

//     // insert(word){
//     //     let node=this.root
//     //     for(let i=0;i<word.length;i++){
//     //         let char=word[i]
//     //         if(!node.children[char]){
//     //             node.children[char]=new trieNode()
//     //         }
//     //         node=node.children[char]
//     //     }
//     //     node.isEnd=true
//     // }
    

    

//     search(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }


//     SartWith(wor){
//         let node=this.root
//         for(let i=0;i<wor.length;i++){
//             let char=wor[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }

// }




// const trie=new Trie()
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("apricot");

// console.log(trie.search("apple"));
// console.log(trie.search("apricot")); 
// // console.log(trie.search("orange"));

// console.log(trie.SartWith("bana"));
// console.log(trie.endsWith("cot"));


// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEnd = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEnd = true;
//     }

//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEnd;
//     }

//     startsWith(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }

// class ReverseTrie extends Trie {
//     insert(word) {
//         let node = this.root;
//         let reversedWord = word.split('').reverse().join('');
//         for (let char of reversedWord) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEnd = true;
//     }

//     endsWith(suffix) {
//         let node = this.root;
//         let reversedSuffix = suffix.split('').reverse().join('');
//         for (let char of reversedSuffix) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }

// // Usage
// const trie = new Trie();
// const reverseTrie = new ReverseTrie();

// trie.insert("apple");
// trie.insert("banana");
// trie.insert("apricot");

// reverseTrie.insert("apple");
// reverseTrie.insert("banana");
// reverseTrie.insert("apricot");

// console.log(trie.search("apple"));        // Output: true
// console.log(trie.search("apricot"));      // Output: true
// console.log(trie.search("orange"));       // Output: false

// console.log(trie.startsWith("bana"));     // Output: true
// console.log(reverseTrie.endsWith("nana")); // Output: true (for "banana")


// class TrieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new TrieNode()
//     }

//     insert(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 node.children[char]=new TrieNode()
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true
//     }

//     search(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }

//     startWith(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }

//     delete(word){
//         this.deleteHel(this.root,word,0)
//     }

//     deleteHel(node,word,index){
//         if(index===word.length){
//             if(!node.isEnd){
//                 return false
//             }
//             node.isEnd=false
//             return Object.keys(node.children).length===0
//         }

//         let char=word[index]
//         if(!node.children[char]){
//             return false
//         }

//         let should=this.deleteHel(node.children[char],word,index+1)
//         if(should){
//             delete node.children[char]
//             return Object.keys(node.children).length===0
//         }
//         return false
//     }
// }




//largest element

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Binary{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }


    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    print(){
        console.log(this.root);
    }

    // largest(root){
    //     if(!this.right){
    //         return root.value
// }
    //         return this.largest(root.right)
    // }


    inOrder(root,arr){
        arr=[]
        if(root){
            this.inOrder(root.left,arr)
            console.log(root.value);
            arr.push(root.value);
            this.inOrder(root.right,arr)
        }
    }


    
}

const bin=new Binary()
bin.insert(10)
bin.insert(15)
bin.insert(16)
bin.insert(13)
bin.insert(19)
// bin.print()
// bin.largest(bin.root)
// bin.inOrder(bin.root)
let a=[]
a.push(bin.inOrder(bin.root))
;
// console.log(a[a.length]);