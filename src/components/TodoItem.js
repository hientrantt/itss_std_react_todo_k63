/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, setItemChecked, deleteItem}) {
  return (
    // <div className="panel-block is-justify-content-space-between" >
    <label className="panel-block"  
      style = {{color: item.done ? "grey" : "black"}} 
    >
            <input type="checkbox" checked={item.done ? true : false}
              onChange={()=>{setItemChecked(item)}}
            />
            {item.text}
    </label>
    // <button className="text-end">X</button>
      // </div>
  );
}

export default TodoItem;