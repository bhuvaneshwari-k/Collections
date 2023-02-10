class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Stack {
    rootNode=null;
    count =0;
    addElement(value){ 
        if(this.rootNode == null){
            this.rootNode= new Node(value)
            this.count++;
        }else{
            let temp = this.rootNode;
            while(temp.nextNode!= null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
        }
    }
    removeElement(){
            let temp = this.rootNode;
            if(this.count==1){
                this.rootNode=temp.nextNode;
            }
            else{
                while(temp.nextNode!= null){
                    var prev=temp;
                    temp=temp.nextNode;
                }    
               prev.nextNode=temp.nextNode;   
            }
            this.count--;
        }


    printElements(){
        let temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
        console.log("Size of the Stack is:",this.count)
        }
}

let stack = new Stack();
stack.addElement(12);
stack.addElement(4);
stack.addElement(10);
stack.addElement(50);
stack.printElements();
stack.removeElement();
stack.removeElement();
stack.printElements();
