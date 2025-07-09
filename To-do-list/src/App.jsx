import { useRef, useState } from "react";
import Data from "./Data";

function App() {
  let [taskData, setTaskData] = useState(Data);
  let [taskpriorty] = useState(["Normal", "High", "Low"]);
  let [defaultSatus, setDefaultStatus] = useState("Active");

  const priorityOrder = { High: 1, Normal: 2, Low: 3 };

  let taskRef = useRef(null);
  let priorityRef = useRef(null);

  const addTask = () => {
    const date = new Date();
    let Title = taskRef.current.value;
    let priority = priorityRef.current.value;
    let taskdate = date.toLocaleDateString();

    let newTask = { Title, priority, Date: taskdate, taskStatus: "Active" };

    setTaskData([...taskData, newTask]);
  };

  const taskDeactive = (index) => {
    let updatedTask = [...taskData];
    updatedTask[index].taskStatus = "Deactive";
    setTaskData(updatedTask);
  };

  const taskActive = (index) => {
    let updatedTask = [...taskData];
    updatedTask[index].taskStatus = "Active";
    setTaskData(updatedTask);
  };

  return (
    <>
      <div className="bg-danger text-white p-3 d-flex justify-content-center">
        <small>To Do List</small>
      </div>

      <div className="row ml-5">
        <div className="col-md-4 mt-3">
          <input
            ref={taskRef}
            placeholder="Create Task"
            className="form-control"
          ></input>
        </div>
        <div className="col-md-4 mt-3">
          <select className="form-control" ref={priorityRef}>
            {taskpriorty.map((task, index) => {
              return <option key={index}>{task}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="row ml-5 mt-3">
        <div className="ml-3">
          <button className="btn btn-success" onClick={addTask}>
            ADD
          </button>
        </div>
      </div>

      <div className="row ml-5 mt-3">
        <div className="ml-3">
          <button
            className="btn btn-primary "
            onClick={() => setDefaultStatus("Active")}
          >
            Active(
            {
              taskData.filter((task) => {
                return task.taskStatus === "Active";
              }).length
            }
            )
          </button>
          <button
            className="btn btn-info ml-3"
            onClick={() => setDefaultStatus("Deactive")}
          >
            Deactive(
            {
              taskData.filter((task) => {
                return task.taskStatus === "Deactive";
              }).length
            }
            )
          </button>
        </div>
      </div>

      <table className="table mt-3">
        <thead className="table-dark">
          <tr>
            <td>S.No</td>
            <td>Title</td>
            <td>Date</td>
            <td>Priority</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
          {taskData
            .filter((task, index) => task.taskStatus == defaultSatus)
            .sort((a, b) => {
              return priorityOrder[a.priority] - priorityOrder[b.priority];
            })
            .map((task, index) => {
              const originalIndex = taskData.indexOf(task);
              return (
                <tr
                  key={index}
                  className={
                    task.priority === "High"
                      ? "table-danger"
                      : task.priority === "Normal"
                      ? "table-warning"
                      : "table-success"
                  }
                >
                  <td>{index + 1}</td>
                  <td>{task.Title}</td>
                  <td>{task.Date}</td>
                  <td>{task.priority}</td>
                  <td>
                    {task.taskStatus === "Active" ? (
                      <button
                        className="btn btn-secondary"
                        onClick={() => taskDeactive(originalIndex)}
                      >
                        Deactive
                      </button>
                    ) : (
                      <button
                        className="btn btn-secondary"
                        onClick={() => taskActive(originalIndex)}
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
    </>
  );
}

export default App;
