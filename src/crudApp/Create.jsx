import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only send 'title' and 'body', no need for 'id'
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log("Response:", res.data); // Log the response data
        navigate("/"); // Redirect to home after successful submission
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Title"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              className="form-control"
              placeholder="Enter Body"
              onChange={(e) => setValues({ ...values, body: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
