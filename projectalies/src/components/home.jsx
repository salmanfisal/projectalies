import Data from "../data.js";
import { useState } from "react";
import "../styles/home.css";
function Home() {
  let [state, setState] = useState(false);
  let [data, setData] = useState({
    Name: "",
    Price: "",
    Description: "",
  });
  let [submit, setSubmit] = useState([]);

  let changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let submitHandler = (e) => {
    e.preventDefault();
    setSubmit([...submit,data]);
    setState(!state);
    setData({
      Name: "",
      Price: "",
      Description: "",
    });
  };
  return (
    <>
      <div className="main_container">
        <div className="container">
        {!state && (<button className="container_button" onClick={() => setState(!state)}>
      Add Products
         </button>
)}
          {state && (
            <button
              type="submit"
              className="container_button2"
              onClick={submitHandler}
            >
              submit
            </button>
          )}
        </div>
        <div
          className="container_popup"
          style={{ display: state ? "block" : "none" }}
        >
          <div className="container_label">
            <label>Name:</label>

            <label>Price:</label>

            <label>Description:</label>
          </div>
          <form>
            <div className="container_input">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={data.Name}
                onChange={changeHandler}
              />
              <input
                type="number"
                placeholder="Price"
                name="Price"
                value={data.Price}
                onChange={changeHandler}
              />
              <textarea
                type="text"
                placeholder="Description"
                name="Description"
                value={data.Description}
                onChange={changeHandler}
              />
            </div>
          </form>
        </div>
        <div className="container_area">
          {submit.length >0 && (
            <table
              className="container_table"
              style={{ display: state ? "none" : "block" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {submit.map((e,i)=>(<tr key={i}>
                  <td>{e.Name}</td>
                  <td>{e.Price}</td>
                  <td>{e.Description}</td>
                </tr>))}
                
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
