// UserForm.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./UserForm.module.scss"; // Make sure to have the correct import for your styles

function UserForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission (e.g., sending data to the server)
    console.log("Form submitted with data:", formData);
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Create Account
      </Button>
    </form>
  );
}

export default UserForm;
