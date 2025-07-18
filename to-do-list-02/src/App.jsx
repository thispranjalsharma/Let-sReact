import { useState } from "react";
import Data from "./ToDoData";
import Header from "./components/Header";
import TableList from "./components/TableList";
import InputSection from "./components/InputSection";
function App() {
  const [taskList, setTaskList] = useState(Data);
  const [priorityList, setPriorityList] = useState([
    { priorityId: 1, priorityValue: "Low" },
    { priorityId: 2, priorityValue: "Normal" },
    { priorityId: 3, priorityValue: "High" },
  ]);

  return (
    <>
      <Header />
      <InputSection
        taskList={taskList}
        setTaskList={setTaskList}
        defaultStatus={defaultStatus}
      />
      <TableList priorityList={priorityList} />
    </>
  );
}

export default App;
