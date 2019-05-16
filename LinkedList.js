'use strict';

class _Node{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(item){     
    this.head = new _Node(item,this.head);
  }

  insertLast(item){
    // checks if ll is empty
    if (this.head === null){
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    while(tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item,null);
  }

  insertAt(item,value){
    let currNode = this.head;
    let prevNode = this.head;
    if (currNode === null){
      this.insertFirst(item); 
      return;
    }
    for (let i=0;i<value;i++){
      if(currNode.next === null){
        currNode.next = new _Node(item,null);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item,currNode);
  }

  insertBefore(item,value){
    if (this.head === null){
      return null;
    }
    // currNode is where to insert
    // nextNode is where to find value
    let currNode = this.head;
    let prevNode = this.head;
    
    while (currNode.value !== value){
      if(currNode.next === null){
        return null;
      }
      prevNode = currNode;
      currNode = prevNode.next;
    }
    const newNode = new _Node(item,currNode);
    prevNode.next = newNode;
  }

  insertAfter(item,value){
    if (this.head === null){
      return null;
    }
    // currNode is where to insert
    // prevNode is where to find value
    let currNode = this.head;
    let prevNode = this.head;
    
    while (prevNode.value !== value){
      if(currNode.next === null){
        return null;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newNode = new _Node(item,currNode);
    prevNode.next = newNode;
  }

  find(item){
    // checks if ll is empty
    if (this.head === null){
      return null;
    }

    let tempNode = this.head;
    while(tempNode.value !== item){
      // checks to see if at the end of ll
      if (tempNode.next=== null){
        console.log('item not found');
        return null;
      }
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  remove(item){
    // checks if ll is empty
    if (this.head === null){
      return null;
    }

    // checks if value is in head
    if (this.head.value===item){
      this.head = this.head.next;
      return;
    }

    // start at head
    let prevNode = this.head;
    let currNode = this.head;

    // loop until currNode value is item
    while(currNode !==null && currNode.value !== item){
      prevNode = currNode;
      currNode = currNode.next;
    }
    // remove pointer pointing at item
    // checks to see if at end of ll
    if (currNode=== null){
      console.log('Error: item not in LinkedList');
      return;
    }
    prevNode.next = currNode.next;
  }
}

module.exports = LinkedList;