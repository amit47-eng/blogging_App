import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    about: "",
    email: "",
    password: "",
    username: "",
    dob: "",
    phoneNumber: "",
    address_1: "",
    address_2: "",
    country: "",
    phone_number_country_code: "",
    state: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/api/v1/user/createuser",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User Created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md w-64 h-screen sticky top-0  ">
      <h2>Sign Up</h2>
      <form onSubmit={handelSubmit} className="space-y-2 ">
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="about">About</label>
          <input
            type="text"
            name="about"
            value={user.about}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="address_1">Address Line 1</label>
          <input
            type="text"
            name="address_1"
            value={user.address_1}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="address_2">Address Line 2</label>
          <input
            type="text"
            name="address_2"
            value={user.address_2}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="phone_number_country_code">
            Phone Number Country Code
          </label>
          <input
            type="text"
            name="phone_number_country_code"
            value={user.phone_number_country_code}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={user.state}
            onChange={handelChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
