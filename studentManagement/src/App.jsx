import { Component } from "react";
import Data from "./Data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS", "IT", "EC", "CV", "IT"],
      defaultBranch: "All",
      errorMsg: "",
    };
  }

  addStudent = () => {
    // let roll = document.getElementById("roll").value;
    // alert(roll);
    let roll = this.rollInput.value;
    let name = this.nameInput.value;
    let branch = this.branchInput.value;
    let contact = this.contactInput.value;

    const exists = this.state.studentList.some(
      (student) => student.roll === roll
    );
    if (exists) {
      this.setState({ errorMsg: "Roll number already exists!" });
      this.rollInput.focus();
      return;
    }

    let newStudent = { roll, name, branch, contact };

    this.setState({
      studentList: [...this.state.studentList, newStudent],
      errorMsg: "", // Clear error if successful
    });
  };

  removeStudent = (roll) => {
    let index = this.state.studentList.findIndex((student) => {
      return student.roll == roll;
    });
    this.state.studentList.splice(index, 1);
    this.setState({ studentList: [...this.state.studentList] });
  };

  render() {
    const { studentList } = this.state;
    const { branchList } = this.state;

    return (
      <>
        <div className="header">
          <h3>Student Management</h3>
        </div>

        <div className="input">
          <div className="row">
            <div className="col">
              <input
                id="roll"
                type="text"
                ref={(rollObject) => {
                  this.rollInput = rollObject;
                }}
                placeholder="Entre the roll Number"
                onChange={() => this.setState({ errorMsg: "" })}
              />
            </div>
            <div className="error-msg">
              {this.state.errorMsg && (
                <p style={{ color: "red" }}>{this.state.errorMsg}</p>
              )}
            </div>

            <div className="col">
              <input
                type="text"
                ref={(nameObject) => {
                  this.nameInput = nameObject;
                }}
                placeholder="Entre the Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Entre the contact"
                ref={(contactObject) => {
                  this.contactInput = contactObject;
                }}
              />
            </div>
            <div className="col">
              <select
                name=""
                id=""
                ref={(branchObject) => {
                  this.branchInput = branchObject;
                }}
              >
                <option value="">Select Branch</option>
                {branchList.map((branch, index) => {
                  return <option key={index}>{branch}</option>;
                })}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button onClick={this.addStudent}> ADD </button>
            </div>

            <div className="col">
              <button
                onClick={() => {
                  this.setState({ defaultBranch: "CS" });
                }}
              >
                CS(
                {
                  studentList.filter((student) => {
                    return student.branch == "CS";
                  }).length
                }
                )
              </button>
              <button
                onClick={() => {
                  this.setState({ defaultBranch: "IT" });
                }}
              >
                IT(
                {
                  studentList.filter((student) => {
                    return student.branch == "IT";
                  }).length
                }
                )
              </button>
              <button
                onClick={() => {
                  this.setState({ defaultBranch: "CV" });
                }}
              >
                CV(
                {
                  studentList.filter((student) => {
                    return student.branch == "CV";
                  }).length
                }
                )
              </button>
              <button
                onClick={() => {
                  this.setState({ defaultBranch: "EC" });
                }}
              >
                EC(
                {
                  studentList.filter((student) => {
                    return student.branch == "EC";
                  }).length
                }
                )
              </button>
              <button
                onClick={() => {
                  this.setState({ defaultBranch: "All" });
                }}
              >
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
              {studentList.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.roll}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.contact}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.removeStudent(student.roll);
                        }}
                      >
                        Remove
                      </button>
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
}

export default App;
