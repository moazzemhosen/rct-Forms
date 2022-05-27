import React,{useEffect,useState} from 'react'

const Table = () => {
      const [employees, setEmployees] = useState([]);
console.log("emp",employees);
      useEffect(() => {
        fetch("http://localhost:8080/employees")
          .then((response) => response.json())
              .then((data) => setEmployees(data));
    
      }, []);
  return (
    <div>
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
            
            return (
              <tr className="row">
                <td className="first_name">{e.username}</td>
                <td className="last_name">{e.Age}</td>
                <td className="email">{e.Address}</td>
                <td className="gender">{e.Department}</td>
                <td className="age">{e.ismarried}</td>
                <td className="tenth_score">{e.photo}</td>
                <td className="twelth_score">{e.twelth_score}</td>
                <td className="preferred_branch">{e.preferred_branch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table