import React, {  useState } from "react";
import axios from "axios";
import "./show.css";

const Form = () => {
    const [form, setForm] = useState({});
    
    

  const handleChange = (e) => {
    let { name, value, type, checked, files } = e.target;
    console.log(type, name, value, checked, files);
      
      
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    };
    
    // useEffect(() => {
        
    // })
    const handleOnSubmit = (e) => {
      e.preventDefault();
        console.log(form);
         axios
           .post("http://localhost:8080/employees",{
             ...form,
           })
           .then(function (response) {
             console.log(response);
           })
           .catch(function (err) {
             console.log(err);
           });
        
       
    };
  return (
    <div>
      Form:
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="username"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="Age"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            name="Address"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department: </label>
          <select
            name="Department"
            value={form.Department}
            onChange={handleChange}
          >
            <option value="">Department</option>
            <option value="FullStack">Full-Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div>
          <label>Salary: </label>
          <input
            type="number"
            name="Age"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Married</label>
          <input
            type="checkbox"
            name="ismarried"
            checked={form.ismarried}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Profile Photo</label>
          <input
            type="file"
            name="photo"
            files={form.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Data</button>
      </form>
     
    </div>
  );
};

export default Form;
