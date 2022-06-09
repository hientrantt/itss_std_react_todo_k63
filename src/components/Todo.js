import React, { useState } from 'react';
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = useStorage("items", []);
  
  const statusList = ["全て", "未完了", "完了済み"];
  const [status, setStatus] = React.useState(statusList[0]);
  const itemsTmp = items.filter(item => {
        switch(status){
          case statusList[0]:
            return true;
          case statusList[1]:
            if(item.done===false) return true;
            else return false;
          case statusList[2]:
            if(item.done===true) return true;
            else return false;
        }
      })
  
  const setItemChecked = (item) => {
    let newItems = items.slice();
    const itemCheckedIndex = newItems.findIndex((currentItem)=>currentItem.key===item.key);
    newItems[itemCheckedIndex] = {...item, done: !item.done};
    putItems(newItems);
  }

  const pushNewItem = (inputValue) => {
    const newItem = { key: getKey(), text: inputValue, done: false};
    const newItems = items.slice();
    newItems.push(newItem);
    putItems(newItems);
  }

  const filterByStatus = (status) => {
    setStatus(status);
  }

  const deleteItem = (item)=>{
    const newItems = items.filter((currentItem)=>currentItem.key!==item.key);
    putItems(newItems);
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input pushNewItem = {pushNewItem}/>
      <Filter currentStatus={status} filterByStatus={filterByStatus}/>
      {itemsTmp.map(item => (
        <TodoItem key={item.key} item={item} setItemChecked = {setItemChecked} deleteItem={deleteItem} />      
      ))}
      <div className="panel-block">
        {itemsTmp.length} items
      </div>
    </div>
  );
}

export default Todo;