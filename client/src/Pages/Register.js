import { Box, Button, MenuItem, Paper, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)({
  margin: "20px auto",
  width: 400,
  padding: "20px 20px",
  borderRadius: "1rem",
  background: "#E0FFFF"
});

const Stack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const FlexBox = styled(Box)({
  display: "flex",
  fontFamily: "Arial",
  justifyContent: "space-between",
  margin: "1rem 0rem"
});

const genders = ["Male", "Female", "Other"];

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    dateOfBirth: "",
    gender: "",
    grade: "",
    city: "",
    course: "",
    college: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <div>
      <StyledPaper elevation={3}>
        <Stack component="form" onSubmit={() => navigate("/")}>
          {/* email */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="Email"
            name="email"
            fullWidth
            required
            type="email"
            variant="standard"
            color="secondary"
            value={user.email}
            onChange={handleInputChange}
          />
          {/* username */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="UserName"
            name="username"
            fullWidth
            required
            type="text"
            variant="standard"
            color="secondary"
            value={user.username}
            onChange={handleInputChange}
          />
          {/* date of birth */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="Date Of Birth"
            name="dateOfBirth"
            fullWidth
            required
            type="date"
            variant="standard"
            color="secondary"
            value={user.dateOfBirth}
            onChange={handleInputChange}
          />
          {/* gender */}
          <TextField
            select
            name="gender"
            label="Gender"
            value={user.gender}
            variant="standard"
            color="secondary"
            onChange={handleInputChange}
          >
            {genders.map((gender) => (
              <MenuItem value={gender}>{gender}</MenuItem>
            ))}
          </TextField>

          {/* city */}
          <TextField
            sx={{ marginBottom: "1rem", marginTop: "0.8rem" }}
            label="City"
            name="city"
            fullWidth
            type="text"
            variant="standard"
            color="secondary"
            value={user.city}
            onChange={handleInputChange}
          />
          {/* course */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="Course"
            name="course"
            fullWidth
            type="text"
            variant="standard"
            color="secondary"
            value={user.course}
            onChange={handleInputChange}
          />
          {/* college */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="College"
            name="college"
            fullWidth
            type="text"
            variant="standard"
            color="secondary"
            value={user.college}
            onChange={handleInputChange}
          />
          {/* password */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            fullWidth
            required
            label="Password"
            name="password"
            color="secondary"
            type="password"
            variant="standard"
            onChange={handleInputChange}
          />
          {/* confirm password */}
          <TextField
            sx={{ marginBottom: "1rem" }}
            fullWidth
            required
            label="Confirm Password"
            name="confirmPassword"
            color="secondary"
            type="password"
            variant="standard"
            onChange={handleInputChange}
          />
          <Button variant="contained" color="secondary" type="submit">
            Register
          </Button>
        </Stack>
      </StyledPaper>
    </div>
  );
};

export default Register;
