"use strict";
module.exports = class TrieNode{
  constructor(text,padding,id,value,sidevalue){
    this.children = [];
    for(var i=0; i<26; i++){ //Total # of English Alphabets
      this.children[i]=null;
    }
    this.id=id;
    this.char = text; 
    this.padding=padding;
    this.value=value;
    this.sidevalue=sidevalue; 
  }
  
}

