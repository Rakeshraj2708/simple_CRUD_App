import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [values, setValues] = ({
    title: "",
    body: "",
  });

  const handleSubmit = () => {
    
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res)
        useNavigate('/')
    })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form>
         
          <div className="mb-2">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="Title"
              className="form-control"
              placeholder="Enter Title"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Body</label>
            <input
              type="text"
              name="Body"
              className="form-control"
              placeholder="Enter Body"
              onChange={(e) => setValues({ ...values, body: e.target.value })}
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
