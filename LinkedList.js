import {Node} from "./Node.js";

export class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value, null);
        } else{
            //let temp = new Node(null, null);
            let temp = this.head;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value, null);
        }
    }

    prepend(value){
        if(this.head===null){
            this.head = new Node(value, null);
        } else{
            let newHead = new Node(value, this.head);
            this.head = newHead;
        }
    }

    size(){
        if(this.head === null) return 0;
        let size = 1;
        let temp = this.head;
        while(temp.nextNode!=null){
            size++;
            temp = temp.nextNode;
        }
        return size;
    }

    getHead(){
        if(this.head===null) return undefined;
        return this.head.value;
    }

    tail(){
        if(this.head===null) return undefined;
        let temp = this.head;
        //using nextnode here because we stop before the last ie null
        while(temp.nextNode!=null){
            temp = temp.nextNode;
        }
        return temp.value;
    }

    at(index){
        let temp = this.head;
        for(let i=0; i <= index; i++){
            if(temp===null) return undefined;
            if(i===index) return temp.value;
            temp = temp.nextNode;
        }
        return temp.value;
    }

    pop(){
        if(this.head===null) return undefined;
        this.head = this.head.nextNode;
    }

    contains(value){
        let temp = this.head;
        while(temp!=null){
            if(temp.value===value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    findIndex(value){
        let temp = this.head;
        let index = 0;
        while(temp!=null){
            if(temp.value===value) return index;
            index++;
            temp = temp.nextNode;
        }
        return -1;
    }

    toString(){
        if(this.head === null) return "";

        let result = "";
        let temp = this.head;
        while(temp != null){
            result+= "( " + temp.value + " ) -> ";
            temp = temp.nextNode;
        }
        result += "( null )";
        return result;
    }

    insertAt(index, ...values){
        if(index<0) throw new RangeError("Index out of range.");
        if(index===0){
            let tempTail = this.head;
            for(let j = values.length-1; j>=0; j--){
                    let newNode = new Node(values[j], tempTail);
                    tempTail = newNode;
                    if(j===0) this.head = newNode;
                }
        }
        let temp = this.head;
        for(let i=0; i <= index; i++){
            if(temp===null) throw new RangeError("Index out of range.");
            if(i===index-1){
                let tempHead = temp;
                let tempTail = temp.nextNode;
                //iterate through backwards, so you always know next
                for(let j = values.length-1; j>=0; j--){
                    let newNode = new Node(values[j], tempTail);
                    tempTail = newNode;
                }
                tempHead.nextNode = tempTail;
                return;
            }
            temp = temp.nextNode;
        }
    }

    removeAt(index){
        if(index<0 || index>this.size()-1) throw new RangeError("Index out of range.");
        let temp = this.head;
        //remove head
        if(index===0){
            this.head = temp.nextNode;
        //remove tail
        } else if (index===this.size()-1){
            for(let i = 0; i<index; i++){
                if(i===index-1) {
                    temp.nextNode = null;
                    return;
                }
                temp = temp.nextNode;
            }
        } else{
            for(let i = 0; i<index; i++){
                if(i===index-1){
                    temp.nextNode = temp.nextNode.nextNode;
                    return;
                }
                temp = temp.nextNode;
                console.log(temp);
            }
            
        }
    }
}