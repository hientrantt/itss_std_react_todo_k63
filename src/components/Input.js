import React, { useState, useRef } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
/* ライブラリ */
import {getKey} from "../lib/util";

function Input({pushNewItem}) {

  const newItem = { key: getKey(), text: '', done: false};
  const inputRef = useRef();
    
  const handle = (inputValue)=>{
    newItem.text = inputValue;
    console.log(newItem, inputRef);
    inputRef.current.value='';
    pushNewItem(newItem);
  }
  
  return (
    <div className="panel-block">
      <input className="input" type="text" 
        ref={inputRef}
        onKeyDown={event => {
          if(event.key === 'Enter') {
            handle(event.target.value)
          }
        }}
      />
    </div>
  );
}

export default Input;
