import React, { useState, useRef } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input({pushNewItem}) {

  const inputRef = useRef();
    
  const handle = (inputValue)=>{
    if(inputValue.trim()==="") {
      alert("インプットを入力しなければなりません")
      return;
    }
    inputRef.current.value='';
    pushNewItem(inputValue.trim());
  }
  
  return (
    <div className="panel-block">
      <input className="input" type="text" 
        placeholder="Todoを入力してください"
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
