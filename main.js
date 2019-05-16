'use strict';
const LinkedList = require('./LinkedList.js');

function main(){
  const SLL = new LinkedList;
  clear(SLL);
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena','Boomer');
  SLL.insertAfter('Hotdog','Helo');
  
  SLL.insertAt('Kat',3);

  SLL.remove('Tauhida');
  display(SLL);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL,'Hotdog'));
  // console.log(findLast(SLL));
  reverse(SLL);
  display(SLL);
  console.log(thirdFromEnd(SLL));
}
main();

function display(ll){
  let currNode = ll.head;
  let output = 'head->';
  while (currNode !== null){
    output += `${currNode.value}->`;
    currNode = currNode.next;
  }
  output += 'null';
  console.log(output);
  return output;
}

function size(ll){
  let currNode = ll.head;
  let size = 0;
  if (currNode===null){
    return size;
  }
  while (currNode !== null){
    currNode = currNode.next;
    size++;
  }
  return size;
}

function isEmpty(ll){
  return ll.head === null;
}

function findPrevious(ll,item){
  let prevNode = ll.head;
  let currNode = ll.head;
  if (currNode === null){
    return null;
  }
  while (currNode!== null && currNode.value !== item){
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode===null){
    return null;
  }
  return prevNode;
}

function findLast(ll){
  let currNode = ll.head;
  let prevNode = ll.head;
  if (currNode === null){
    return null;
  }
  while (currNode!== null){
    prevNode = currNode;
    currNode = currNode.next;
  }

  return prevNode;
}

function clear(ll){
  ll.head = null;
}


// Mystery Program
// a function that removes duplicates
// time complexity of O(n^2)
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// Reverse a list
// time complexity should be O(n)
function reverse(ll){
  let prev = ll.head;
  let currNode = ll.head;
  let next = ll.head;
  if(next === null){
    return;
  }
  next = next.next;
  while (next !== null ){
    currNode.next = prev;
    prev = currNode;
    currNode = next;
    next = next.next;
    
  }
  currNode.next = prev;
  ll.head.next = null;
  ll.head = currNode;
}

// 3rd from the end

function thirdFromEnd(ll){
  let currNode = ll.head;
  while (currNode !== null && currNode.next !== null && currNode.next.next !== null){
    if (currNode.next.next.next === null){
      return currNode;
    }
    currNode = currNode.next;
  }
  return null;
}

// middle of a list
function middleOfList(ll){
  
}