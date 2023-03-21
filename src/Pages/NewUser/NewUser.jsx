import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="NewUser">
      <div className="formTitle">New User</div>

      <form>
        <div className="newUserForm">
          <div className="leftForm">
            <div className="userUpdateItem ">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="email"
                placeholder="user921@gmail.com"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="+1 234 567 89"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
              </div>
            </div>
          </div>
          {/* Right side */}

          <div className="rightForm">
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Jon Snow"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="Address"
                placeholder="New York|USA"
                className="userUpdateInput newUserInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
