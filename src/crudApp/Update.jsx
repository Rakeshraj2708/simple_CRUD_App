import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Update() {
  
  const { id } = useParams();
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate(); // 
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log("Response:", res); // Log the response data
        navigate("/"); // Redirect to home after successful submission
      })
      .catch((err) => console.log("Error:", err));
  }
  
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Title"
              value={values.title}
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
              value={values.body}
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
  )
}
