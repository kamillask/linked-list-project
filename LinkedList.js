import {Node} from "./Node";

export class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value, null);
        } else{
            //let temp = new Node(null, null);
            temp = this.head;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.next = new Node(value, null);
        }
    }

    prepend(value){
        
    }

    size(){

    }

    head(){

    }

    tail(){

    }

    at(index){

    }

    pop(){

    }

    contains(value){

    }

    findIndex(value){

    }

    toString(){
        let result = "";
        let temp = this.head;
        while(temp.nextNode != null){
            result+= "( " + temp.value + ") -> ";
        }
        return result;
    }
}