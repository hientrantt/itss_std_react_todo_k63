/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, setItemChecked, deleteItem }) {
  return (
    <label className="panel-block" style={{ color: item.done ? "grey" : "black" }}
    >
      <span style={{color: "red", marginRight: "20px", padding: "5px 10px",border: "1px solid black"}}
        onClick={()=>{
          deleteItem(item)
        }}
      >X</span>
      <input type="checkbox" checked={item.done ? true : false}
        onChange={() => {
          setItemChecked(item);
        }}
      />
      {item.text}
    </label>
  );
}

export default TodoItem;
