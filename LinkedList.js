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
        
    }
}