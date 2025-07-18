function InputSection({ priorityList }) {
  const [title, setTitle] = useState("");
  const [pid, setPid] = useState("0");
  const handleAdd = () => {
    let status = "active";
    let date = new Date();
    date =
      date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let newTask = { title, pid, status, date };
    setTaskList([...taskList, newTask]);
  };
  const [defaultStatus, setDeafaultStatus] = useState("active");


  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter task title"
            />
          </div>
          <div className="col-md-6">
            <select
              onChange={(event) => setPid(event.target.value)}
              className="form-control"
            >
              <option value="0">select priority</option>
              {priorityList.map((priorityObj, index) => {
                return (
                  <option key={index} value={priorityObj.priorityId}>
                    {priorityObj.priorityValue}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button onClick={handleAdd} className="btn btn-secondary">
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-3 m">
        <button
          onClick={() => setDeafaultStatus("active")}
          disabled={defaultStatus == "active" ? true : false}
          className="btn btn-success"
        >
          Active(
          {
            taskList.filter((task) => {
              return task.status == "active";
            }).length
          }
          )
        </button>
        <button
          onClick={() => setDeafaultStatus("deactive")}
          disabled={defaultStatus == "deactive" ? true : false}
          className="btn btn-primary ml-2"
        >
          Deactive(
          {
            taskList.filter((task) => {
              return task.status == "deactive";
            }).length
          }
          )
        </button>
      </div>
    </>
  );
}

export default InputSection;
