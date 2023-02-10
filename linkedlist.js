class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class LinkedList{
        rootNode = null;
        count = 0;
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
        insertElement(value, index){
            let newNode=new Node(value);
            if(index==0){
            console.log("After Insert an element at Start:")
            let temp = this.rootNode;
            newNode.nextNode=temp;
            this.rootNode=newNode;
        }
        else{
            console.log("After Insert an element at Middle/Last:")
            let temp = this.rootNode;
            let count1=0;
            while(temp!= null){
                        let current = temp.nextNode;
                        count1++;
                        if(count1==index){
                            temp.nextNode=newNode;
                            newNode.nextNode=current;
                            break;
                        }
                        temp=temp.nextNode;

            }
        }
        this.count++;
        }

        removeElement(index){
            if(index==0){
                console.log("After Delete an element at Start:")
                let temp = this.rootNode;
                this.rootNode=temp.nextNode;
            }
           else{
            console.log("After Delete an element at Middle/Last:")
            let temp = this.rootNode;
            let count1=0;
            while(temp!= null){
                        let prev = temp.nextNode;
                        count1++;
                        if(count1==index){
                            temp.nextNode=prev.nextNode;
                            break;
                        }
                        temp=temp.nextNode;

            }
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
        console.log("Size of the LinkedList is:",this.count)
        }
}


let list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.printElements();
list.insertElement(5,3);
list.printElements();
list.removeElement(3);
list.printElements();
