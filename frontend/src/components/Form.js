import React, { useState } from "react";
import axios from "axios";
import "./Style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    address: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //  // setFormData({ ...formData, [name]: value });
  //  setFormData((prevFormData) => ({
  //   ...prevFormData,
  //   [name]: value,
  // }));
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({ ...prevState, [name]: value }));
  // };

  const collectData = async (e) => {
    e.preventDefault();
    console.log("Form Submitted. FormData:", formData);
    try {
      const response = await axios.post("http://localhost:8080/user", formData);
      if (response && response.data) {
        console.log("API Response:", response.data);
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          password: "",
          phoneNo: "",
          address: "",
        });
      } else {
        console.error("Error: Response or response data is undefined");
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={collectData}>
        <h1 className="text-center">SIGNUP FORM</h1>
        <div className="">
          <label className="form-label">Username</label>
          <input
            type="text"
            className=""
            placeholder="Name"
            value={formData.name}
            onChange={(
              e //{handleChange}
            ) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="">
          <label className="form-label">Email</label>
          <input
            type="email"
            className=""
            placeholder="Email"
            value={formData.email}
            onChange={(
              e //{handleChange}
            ) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="">
          <label className="form-label">Password</label>
          <input
            type="password"
            className=""
            placeholder="Password"
            value={formData.password}
            onChange={(
              e //{handleChange}
            ) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="">
          <label className="form-label">PhoneNO.</label>
          <input
            type="phoneNo"
            className=""
            placeholder="PhoneNo"
            value={formData.phoneNo}
            onChange={(
              e //{handleChange}
            ) => setFormData({ ...formData, phoneNo: e.target.value })}
            required
          />
        </div>
        <div className="">
          <label className="form-label">Address</label>
          <input
            type="address"
            className=""
            placeholder="Address"
            value={formData.address}
            onChange={(
              e //{handleChange}
            ) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
