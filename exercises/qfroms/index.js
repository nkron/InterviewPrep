// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    
    pushStack = new Stack();
    popStack = new Stack();
    activeStack = 'push';
    add(x){
        if(this.activeStack=='push'){
            this.popStack.push(x)
        }
        else{
            this.flipStack();
            this.popStack.push(x)
        }
    }
    peek(){
        if(this.activeStack=='pop'){
            this.popStack.peek()
        }
        else{
            this.flipStack();
            this.popStack.peek()
        }
    }
    remove(){
        if(this.activeStack=='pop'){
            this.popStack.pop()
        }
        else{
            this.flipStack();
            this.popStack.pop()
        }
    }
    flipStack(){
        if(this.activeStack == 'push'){
            for(let thing in this.pushStack){
                this.popStack.push(thing);
            }
            this.activeStack='pop';
        }
        else{
            for(let thing in this.popStack){
                this.pushStack.push(thing);
            }
            this.activeStack='push';
        }
    }
}

module.exports = Queue;
