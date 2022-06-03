/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, setItemChecked}) {
  return (
    <label className="panel-block"  
      style = {{color: item.done ? "green" : "black"}} 
    >
            <input type="checkbox" checked={item.done ? true : false}
              onChange={()=>{setItemChecked(item)}}
            />
            {item.text}
    </label>
  );
}

export default TodoItem;