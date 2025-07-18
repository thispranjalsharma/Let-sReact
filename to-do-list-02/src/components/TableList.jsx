function TableList({ taskList, defaultStatus }) {
  const changeTaskStatus = (t, status) => {
    let index = taskList.findIndex((task) => {
      return task.title == t.title;
    });
    t.status = status;
    taskList.splice(index, 1, t);
    setTaskList([...taskList]);
  };
  return (
    <>
      <div className="container mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {taskList
              .filter((task) => {
                return task.status == defaultStatus;
              })
              .sort((a, b) => {
                return b.pid - a.pid;
              })
              .map((task, index) => {
                return (
                  <tr
                    className={
                      task.pid == 3
                        ? "bg-danger"
                        : task.pid == 2
                        ? "bgorange"
                        : "bg-success"
                    }
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.date}</td>
                    <td>
                      {
                        priorityList.find((obj) => {
                          return obj.priorityId == task.pid;
                        }).priorityValue
                      }
                    </td>
                    <td>
                      {task.status == "active" ? (
                        <button
                          onClick={() => changeTaskStatus(task, "deactive")}
                          className="btn button-size btn-outline-warning"
                        >
                          Deactive
                        </button>
                      ) : (
                        <button
                          onClick={() => changeTaskStatus(task, "active")}
                          className="btn button-size btn-outline-warning"
                        >
                          Active
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableList;
