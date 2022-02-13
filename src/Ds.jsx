import React from "react";
import TodoForm from './components/TodoForm.jsx';



const { RiFileCopyLine } = require("react-icons/ri");
const TrieNode = require("./Trienode.js");

class Trie {
  constructor() {
    this.root = new TrieNode(""); //Root node
  }

  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(key) {
  
   
    if (key == null) {
      return;
    }
    let currentNode = this.root;
    let index = 0;
    let track=key.number.toString();
    let length=key.number.toString().length;
  
    for (let level = 0; level < length; level++) {
      index = track[level]
     

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(key.text,key.number.toString().length*100,key.id,key.number,key.sidevalue);
        
      }
      currentNode = currentNode.children[index];
    }

   
    
   
  }

  /*search(key) {
    if (key == null) {
      return false; //null key
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (var level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode != null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }*/
}

var cha = [];
function clearcha(){
  cha=[];
}

function manipulate(x){
  // console.log(x);
  return x+'px';
}



function travsersing(t) {
  
  // console.log('saistart');
  if (t == null) {
    return;
  }
  if(t.char!=='')
  {
    
    cha.push(
      {
        id:t.id,
        char:t.char,
        padding:t.padding,
        value:t.value,
        sidevalue:t.sidevalue


        
      }
    );
  }
// console.log(t.char,t.track);
for (var index = 0; index < 26; index++) {
    travsersing(t.children[index]);
    
  }
  console.log("\t");
}

function printsome(todos){
  console.log(todos);

}

function Ds({ todos,onSubmit,updateTodo }) {
 
  console.log(todos);
  let t = new Trie();
  
  for (let i = 0; i < todos.length; i++) {
    t.insert(todos[i]);
  }
  clearcha();
  // printsome(todos);
  travsersing(t.root);
  return (
    <div className="comment-body">
      {cha.map((x,loc) => {
        return <div  key={x.id} className="placed" style={{paddingLeft:manipulate(x.padding)}}><TodoForm text={x.char+x.id} onSubmit={onSubmit} commentvalue={x.value+x.sidevalue} updateTodo={updateTodo} keyid={x.id}/> </div>;
               
      })}
    </div>
  );
}

export default Ds;
