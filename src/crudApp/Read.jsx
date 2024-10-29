import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow ps-5 pt-3 pb-5 rounded">
        
        <div className="mb-2">
          <strong>Title: {data.title}</strong>
        </div>
        <div className="mb-2">
          <strong>Body: {data.body}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
        <Link to="/" className="btn btn-primary ms-3">Back</Link>
      </div>
    </div>
  );
}
