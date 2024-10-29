import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          location.reload("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <h1>List of users</h1>
      <div className="w-100 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-stipend align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td className="col-4">{d.title}</td>
                <td className="col-4">{d.body}</td>
                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-sm-3 "
                  >
                    Read
                  </Link>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-sm-3">
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger me-sm-3"
                    onClick={(e) => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  
}
