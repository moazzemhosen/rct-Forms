import React, { useEffect, useState } from "react";
import "./show.css";
import axios from "axios";
// import DeleteItem from "./Delete";
const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(1);
  const [count,setCount]=useState()

  const pagehandleChange = (e) => {
    // console.log(e.target.value)
    const { value } = e.target;
    setLimit(value);
  };
  // useEffect(() => {
  //   fetch(`http://localhost:8080/employees?_page=${page}&_limit=${limit}`)
  //     .then((r) => r.json())
  //     .then((d) => {
  //       console.log("d",d);
  //       setEmployees(d);

  //     });
  // }, [page, limit]);

  const deleteItem = (id, e) => {
    // e.preventDefault();
    console.log("id1",id);
    // employees.filter((employees) => employees.id !== id);
  }


useEffect(() => {
  const getData = async () => {
    let r = await axios.get(
      `http://localhost:8080/employees?_page=${page}&_limit=${limit}`
    );
    console.log(r);
    setEmployees(r.data);
    setCount(Number(r.headers["x-total-count"]));
  };
  getData();
}, [page, limit]);
  return (
    <div>
      <div>
        <label>Page limit</label>
        <input type="number" name="page" onChange={pagehandleChange} />
      </div>
      Table:
      <table className="table">
        <thead>
          <tr>
            <th> Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
            <th>Photo Link</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {employees.map((e) => {
            console.log(e.username);
            return (
              <tr key={e.id} className="row">
                <td>{e.username}</td>
                <td>{e.Age}</td>
                <td>{e.Address}</td>
                <td>{e.Department}</td>
                <td>{e.Salary}</td>
                <td>{e.ismarried ? "Yes" : "No"}</td>
                {/* <td className="tenth_score">{e.photo}</td> */}
                <td>
                  <button onClick={deleteItem(e.id)}>Delete</button>
                </td>
                {/* <button key={e.id} onClick={deleteItem}>X</button> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        disabled={ page <=1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Pre
      </button>
      <button
        disabled={count < page * limit}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Table;
