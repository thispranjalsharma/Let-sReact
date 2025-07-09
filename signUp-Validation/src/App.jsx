import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  addData = () => {
    let name = this.nameInput.value;
    let email = this.emailInput.value;
    let username = this.usernameInput.value;
    let password = this.passInput.value;
    let repass = this.repassInput.value;

    if (password !== repass) {
      alert("Password Should be same ");
    }

    if (!email || !username || !password || !repass || !name) {
      alert("plase fill the input field");
    }
    let newData = { name, email, username, password };
    if (newData) {
      console.log("No data");
      this.setState({ info: [...this.state.info, newData] });
    }
  };
  render() {
    const { info } = this.state;
    return (
      <>
        <div id="main">
          <div className="leftSection">
            <div className="image">
              <img
                src="https://static.vecteezy.com/system/resources/previews/026/829/465/non_2x/beautiful-girl-with-autumn-leaves-photo.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="rightSection">
            <div className="input-form">
              <h3>Sign Up</h3>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                placeholder="Name..."
                id="name"
                ref={(nameObject) => {
                  this.nameInput = nameObject;
                }}
              />
              <div className="error-msg">
                {this.state.errorMsg && (
                  <p style={{ color: "red" }}>{this.state.errorMsg}</p>
                )}
              </div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email address"
                id="email"
                ref={(emailObject) => {
                  this.emailInput = emailObject;
                }}
              />
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Username.."
                id="username"
                ref={(usernameObj) => {
                  this.usernameInput = usernameObj;
                }}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password..."
                id="password"
                ref={(passObj) => {
                  this.passInput = passObj;
                }}
              />
              <label htmlFor="">Repeat Password</label>
              <input
                type="password"
                placeholder="Repeat Password"
                id="repeat-password"
                ref={(repassObj) => {
                  this.repassInput = repassObj;
                }}
              />

              <div className="checkBox">
                <input type="checkbox" /> I agree to the Terms of User
              </div>
              <div className="btn">
                <button onClick={this.addData}>SignUp</button>
                <button>Sign in 👉🏽👉🏻➡️</button>
              </div>
            </div>
          </div>
        </div>
        <div className="result">
          {info.map((query, index) => {
            return (
              <>
                <ol>
                  <li key={index}>Name : {query.name}</li>
                  <li key={index}>Email : {query.email}</li>
                  <li key={index}>Username : {query.username}</li>
                  <li key={index}>Password : {query.password}</li>
                </ol>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
