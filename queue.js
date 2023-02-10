class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Queue {
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
        this.rootNode=this.rootNode.nextNode;
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
    console.log("Size of the Queue is:",this.count)
    }
    }
let queue = new Queue(); 
queue.addElement(12);
queue.addElement(4);
queue.addElement(10);
queue.printElements();
queue.removeElement();
queue.printElements();
