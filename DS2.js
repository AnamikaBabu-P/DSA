////////////---------Sort-------------------//////////////

------------------bubble sort  O(n2)---------------------//

function bubbleSort(arr){
    let swapping
    do{
        swapping = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapping = true
            }
        }
    }while(swapping)
        return arr
}

let arr2 = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr2));

-------------------------insertion sort- O(n2)----------------//

function insertionSort(arr){

    for(let i= 1;i<arr.length;i++){
        let j = i-1
        let nti = arr[i]
        while(j >=0 && arr[j]>nti){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = nti
    }
    return arr
}
let arr2 = [5, 1, 4, 2, 8];
console.log(insertionSort(arr2));


---------------------quick sort ------------------//

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left =[]
    let right = []
    for(let i=0 ;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr2 = [5, 1, 4, 2, 8];


console.log(quickSort(arr2));

------------------------Merge sort---------------------------//

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
            sortedArr.push(leftArr.shift())
       }else{
           sortedArr.push(rightArr.shift())
       } 
    }
    return [...sortedArr,...leftArr,...rightArr]
}
let arr1 = [64, 25, 12, 22, 11];

console.log(mergeSort(arr1));

--------------------selection sort----------------------//

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex =i

        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex!==i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
let arr3 = [10, 9, 8, 7, 6]; 

console.log(selectionSort(arr3));

//////////////////-------Stack-------------////////////////

---------------------Array Based stack--------------------//

class Stack {
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }

    isEmpty(){
        return this.items.length === 0
    }

    pop(){
        if(this.isEmpty()){
            return 'stack underflow'

        }else{
            return this.items.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'No elements in the stack'
        }else{
            return this.items[this.items.length-1]
        }
    }

    getItem(){
        if(this.isEmpty()){
            return 'no elements'

        }else{
            return this.items
        }
    }

    display(){
        if(this.isEmpty()){
            console.log('no elements'); 
        }else{
            console.log( this.items.join(' '));
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('No elements in the stack');
        }else{
            let str = ''
            for(let i=0;i<this.items.length;i++){
                str += ` ${this.items[i]}`
            }
            console.log(str);
        }
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(5)
stack.print()
// console.log(stack.pop());
stack.print()
console.log(stack.getItem());
stack.display()
console.log(stack.peek());


//-----------sort a stack --------------------//
const sortedItems = stack.getItem().sort((a,b)=>a-b)
console.log(sortedItems);

//-------------reverse string----------------//
function reverse(str){
    const stack = new Stack()
    for(let char of str){
        stack.push(char)
    }

    let reversed = ''
    while(!stack.isEmpty()){
        reversed = reversed + stack.pop()
    }
    return reversed
}
console.log(reverse('abc'));


//-------------Count even numbers---------------//

function countEven(stack){
    const temp = new Stack()
    let count =0

    while(!stack.isEmpty()){
        let item = stack.pop()
        if(item % 2===0){
            
            count++;
        }
        temp.push(item)
    }

    while(!temp.isEmpty()){
        stack.push(temp.pop())
    }
    return count
  
}

console.log(countEven(stack));

//------------------Remove Even -----------------//

function removeEven(stack){
    const temp = new Stack()
    while(!stack.isEmpty()){
        const element = stack.pop()
        if(element %2 !==0){
            temp.push(element)
        }
    }

    while(!temp.isEmpty()){
        stack.push(temp.pop())
    }

}
  removeEven(stack)
stack.print()

//-----------------Prime number -------------------//
function prime(number){
    if(number<=1){
        return false
    }
    const stack=new Stack()
    for(let i=2;i<number;i++){
        stack.push(i)
    }
    while(!stack.isEmpty()){
        const factor=stack.pop()
        if(number%factor===0){
            return false
        }
    }
    return true
}
console.log(prime(5));
//------------------Find target-----------------------//
 function findTarget(stack,t){
        const temp=new Stack()
        let found=false
    
        while(!stack.isEmpty()){
            const ele=stack.pop()
            if(ele===t){
                found=true
            }
            temp.push(ele)
        }
        while(!temp.isEmpty()){
            stack.push(temp.pop())
        }
        return found
    }

    console.log(findTarget(stack,5));





------------------------Linked list based stack -------------------//


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        let node = new Node(value)
        node.next = this.top
        this.top = node
        this.size++;
    }

    isEmpty(){
        return this.size === 0
    }

    pop(){
        if(this.isEmpty()){
            return 'No elements in the stack'
        }
        let removeValue = this.top.value
        this.top = this.top.next
        this.size--;
        return removeValue
    }

    peek(){
        if(this.isEmpty()){
            return 'No elements in the stack'
        }
        return this.top.value
    }

    print(){
        if(this.isEmpty()){
             console.log('No elements in the stack');
        }else{
            let result= ''
            let curr = this.top

            while(curr){
                result +=` ${curr.value}`
                curr = curr.next
            }
            console.log(result);
        }

    }


}

 const stack = new Stack()
 stack.push(10)
 stack.push(20)
 stack.push(30)
 stack.push(40)
 stack.print()
console.log( stack.pop());
 console.log(stack.peek());
 stack.print()

------------------------Custom stack with fixed size-------------------// 

class Stack {
    constructor(size){
        this.items = new Array(size)
        this.top = -1
        this.maxSize = size
    }

    push(value){
        if(this.isFull()){
            console.log('Stack overflow');
        }
        this.top++
        this.items[this.top] = value;
    }

    pop(){
        if(this.isEmpty()){
            console.log('stack underflow');
            return ;
        }else{
            let poppedItem = this.items[this.top];
            this.items[this.top] = undefined
            this.top--;
            return poppedItem
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log('stack underflow');
            return
        }else{
            return this.items[this.top]
        }
    }

    isEmpty(){
        return this.top === -1
    }
    isFull(){
        return this.top === this.maxSize-1;
    }

    print(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }else{
            let stackContent ='';
            for(let i = this.top;i>=0;i--){
                stackContent +=` ${this.items[i]}`;
            }
            console.log(stackContent);
        }
    }
}

const stack = new Stack(5)
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(30)
stack.push(30)
console.log(stack.isFull()); 
console.log(stack.pop());
console.log(stack.peek());
stack.push(10)
stack.push(20)
stack.print() 

//////////////////-----------Queue-----------/////////////////


-----------------queue by array------------------------//

class Queue {
    constructor (){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length
    }
get(){
        return this.item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }else{
            return null
        }
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue()

console.log('Is empty? ,',queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.getSize());
console.log(queue.dequeue());
console.log(queue.peek());
let s=queue.get()
// console.log(s.reverse().toString());

// ------------------------queue as object----------------------------//

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++;
    }

    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    getSize(){
        return this.rear - this.front
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items);
    }


}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.getSize());

console.log(queue.dequeue())
queue.print()
console.log(queue.peek());

// -----------------------circular queue--------------------//

class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1

    }

    isEmpty(){
        return this.currentLength === 0
    }
    
    isFull(){
        return this.currentLength === this.capacity
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength +=1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1 )% this.capacity
        this.currentLength -=1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log('The queue is empty');
        }else{
            let i
            let str = ''
            for(i= this.front; i!== this.rear;i=(i+1) % this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str);
        }
    }
}

const queue = new CircularQueue(5)
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
console.log(queue.dequeue());
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.print()
queue.peek()
queue.enqueue(50)
queue.print()
queue.enqueue(50)
queue.enqueue(50)
queue.print()


// -----------------------Priority Queue--------------------------//

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    peek() {
        return this.items[0];
    }

    print() {
        console.log(this.items);
    }
}

// Example usage of PriorityQueue:
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.peek()); // Output: { element: 'Task 2', priority: 1 }

console.log(priorityQueue.dequeue()); // Output: { element: 'Task 2', priority: 1 }

priorityQueue.print(); // Output: [ { element: 'Task 3', priority: 2 }, { element: 'Task 1', priority: 3 } ]

// ---------------------------------Double ended queue------------------------------------//

class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addRear(element) {
        this.items.push(element);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    peekFront() {
        return this.items[0];
    }

    peekRear() {
        return this.items[this.items.length - 1];
    }

    print() {
        console.log(this.items);
    }
}

// Example usage of Deque:
const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);

console.log(deque.peekFront()); // Output: 5
console.log(deque.peekRear()); // Output: 20

console.log(deque.removeFront()); // Output: 5
console.log(deque.removeRear()); // Output: 20

deque.print(); // Output: [ 10 ]




////////////////////// //-------------Hash table------------////////////////

class HashTable {
    constructor (size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }


}

const table = new HashTable(50)
table.set('name','Anamika')
table.set('Age',21)
console.log(table.get('name'));
table.remove('Age')
table.set('mane','abc')
table.display()

// --------------------Hash collision----------------------------//




class hashtable{
        constructor(size){
            this.table=new Array(size)
            this.size=size
        }
    
        hash(key){
            let total=0
            for(let i=0;i<key.length;i++){
                total=total+key.charCodeAt(i)
            }
            return total%this.size
        }
    
        set(key,value){
            const index=this.hash(key)
            const bucket=this.table[index]
            if(!bucket){
                this.table[index]=[[key,value]]
            }else{
                const sameKey=bucket.find(item=>item[0]===key)
                if(sameKey){
                    sameKey[1]=value
                }else{
                    bucket.push([key,value])
                }
            }
        }
    
        get(key){
            const index=this.hash(key)
            const bucket=this.table[index]
            if(bucket){
                const samekey=bucket.find(item=>item[0]===key)
                if(samekey){
                    return samekey[1]
                }
            }
            return undefined
        }
    
        remove(key){
            const index=this.hash(key)
            const bucket=this.table[index]
            if(bucket){
                const sameKey=bucket.find(Item=>Item===key)
                if(sameKey){
                    bucket.splice(bucket.indexOf(sameKey),1)
                }
            }
        }
    
    
        display(){
            for(let i=0;i<this.table.length;i++){
                if(this.table[i]){
                    console.log(i,this.table[i]);
                }
            }
        }
    }
    
    
    const table=new hashtable(30)
    table.set('name','Anamika')
    table.set('mane','Anamika')
    table.set('age','45677')
    table.set('gea','0909')
    console.log(table.get("mane"));
    table.display() 
    
    table.remove('age','45677')
    table.display() 