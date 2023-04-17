import { Box, Button, Paper, styled, TextField } from "@mui/material";
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
  display: "flex"
});

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    dateOfBirth: "",
    gender: "",
    grade: "",
    location: "",
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
          <FlexBox>
            <label style={{ color: "#808080", fontFamily: "Arial" }}>
              Gender:
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />
              Female
            </label>
          </FlexBox>
          <TextField
            sx={{ marginBottom: "1rem" }}
            fullWidth
            label="Confirm Password"
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
