/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({currentStatus, filterByStatus}) {
  const statusList = ["全て", "未完了", "完了済み"];
  return (
    <div className="panel-tabs">
      { statusList.map((status, index)=>
          <span className="filter" 
            key={index}
            style={{color: status===currentStatus?"black":"blue"}}
            onClick={()=>{
              console.log("change");
              filterByStatus(status)}}  
          >
            {status}
          </span>
        )
      }
    </div>
  );
}

export default Filter