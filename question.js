'use strict';
// question of the day

// Given a sorted ll write a function insertInSortedOrder() to insert 
//   an item in the sorted linked list preserving the order of the list. 
// You can take only one pass through the list to do this. 
// Don't worry about duplicates. 
// You can't use LL built in functions such as insertFirst, insertAt, insertLast. 
// You can use a private class to create the nodes.
class _Node{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}


function insertInSortedOrder(sll,item){
  let currNode = sll.head;
  if (currNode === null || currNode.value > item){
    currNode = new _Node(item,currNode);
    return null;
  }
  let prevNode = sll.head;
  while(currNode.value < item && currNode !== null){
    prevNode = currNode;
    currNode = currNode.next;
  }
  prevNode.next = new _Node(item,currNode);
  return sll;
  
}