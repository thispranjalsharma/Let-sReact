// App.js
import React, { useState, useRef } from "react";
import Data from "./Data";
import "./App.css";

function App() {
  const [studentList, setStudentList] = useState(Data);
  const [branchList] = useState(["CS", "IT", "EC", "CV", "IT"]);
  const [defaultBranch, setDefaultBranch] = useState("All");
  const [errorMsg, setErrorMsg] = useState("");

  const rollInput = useRef();
  const nameInput = useRef();
  const contactInput = useRef();
  const branchInput = useRef();

  const addStudent = () => {
    const roll = parseInt(rollInput.current.value.trim());
    const name = nameInput.current.value.trim();
    const branch = branchInput.current.value;
    const contact = contactInput.current.value.trim();
    // alert(roll);

    if (!roll || !name || !branch || !contact) {
      setErrorMsg("All fields are required.");
      return;
    }

    const exists = studentList.some((student) => student.roll === roll);
    if (exists) {
      console.log(`Duplicate roll found: ${roll}`);

      setErrorMsg("Roll number already exists!");
      rollInput.current.focus();
      return;
    }

    const newStudent = { roll, name, branch, contact };
    setStudentList([...studentList, newStudent]);
    // localStorage.setItem("student",JSON.stringify(newStudent));

    setErrorMsg("");

    // Clear inputs
    rollInput.current.value = "";
    nameInput.current.value = "";
    contactInput.current.value = "";
    branchInput.current.value = "";
  };

  const removeStudent = (roll) => {
    const updatedList = studentList.filter((student) => student.roll !== roll);
    setStudentList(updatedList);
  };

  const filteredStudents =
    defaultBranch === "All"
      ? studentList
      : studentList.filter((student) => student.branch === defaultBranch);

  return (
    <>
      <div className="header">
        <h3>Student Management</h3>
      </div>

      <div className="input">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Enter the roll number"
              ref={rollInput}
              onChange={() => setErrorMsg("")}
            />
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
          </div>

          <div className="col">
            <input type="text" placeholder="Enter the name" ref={nameInput} />
          </div>

          <div className="col">
            <input
              type="text"
              placeholder="Enter the contact"
              ref={contactInput}
            />
          </div>

          <div className="col">
            <select ref={branchInput}>
              <option value="">Select Branch</option>
              {branchList.map((branch, index) => (
                <option key={index}>{branch}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <button onClick={addStudent}>ADD</button>
          </div>

          <div className="col">
            <button onClick={() => setDefaultBranch("CS")}>
              CS({studentList.filter((s) => s.branch === "CS").length})
            </button>
            <button onClick={() => setDefaultBranch("IT")}>
              IT({studentList.filter((s) => s.branch === "IT").length})
            </button>
            <button onClick={() => setDefaultBranch("CV")}>
              CV({studentList.filter((s) => s.branch === "CV").length})
            </button>
            <button onClick={() => setDefaultBranch("EC")}>
              EC({studentList.filter((s) => s.branch === "EC").length})
            </button>
            <button onClick={() => setDefaultBranch("All")}>
              Total({studentList.length})
            </button>
          </div>
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.contact}</td>
                <td>
                  <button onClick={() => removeStudent(student.roll)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
