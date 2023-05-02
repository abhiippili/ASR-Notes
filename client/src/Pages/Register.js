import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CakeIcon from "@mui/icons-material/Cake";
import MaleIcon from "@mui/icons-material/Male";
import PlaceIcon from "@mui/icons-material/Place";
import ClassIcon from "@mui/icons-material/Class";
import SchoolIcon from "@mui/icons-material/School";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomStack = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: "0rem 8%"
});

const StyledPaper = styled(Paper)({
  margin: "8px",
  width: 400,
  padding: "12px 12px",
  borderRadius: "1rem",
  background: "#ffff"
});

const Stack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
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

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <div>
      <CustomStack>
        <StyledPaper elevation={8}>
          <Stack component="form" onSubmit={() => navigate("/")}>
            <Typography
              variant="h6"
              fontFamily="Poppins"
              align="center"
              fontWeight={600}
            >
              Register as a student
            </Typography>
            {/* email */}
            <FlexBox>
              <EmailIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
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
            </FlexBox>
            {/* username */}
            <FlexBox>
              <AccountCircleIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
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
            </FlexBox>
            {/* date of birth */}
            <FlexBox>
              <CakeIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
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
            </FlexBox>
            {/* gender */}

            <FlexBox sx={{ alignItems: "flex-end" }}>
              <MaleIcon />
              <TextField
                select
                fullWidth
                sx={{ marginLeft: "0.5rem" }}
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
            </FlexBox>

            {/* city */}
            <FlexBox sx={{ marginTop: "0.8rem" }}>
              <PlaceIcon />
              <TextField
                sx={{
                  marginBottom: "1rem",
                  marginLeft: "0.5rem"
                }}
                label="City"
                name="city"
                fullWidth
                type="text"
                variant="standard"
                color="secondary"
                value={user.city}
                onChange={handleInputChange}
              />
            </FlexBox>
            {/* course */}
            <FlexBox>
              <ClassIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                label="Course"
                name="course"
                fullWidth
                type="text"
                variant="standard"
                color="secondary"
                value={user.course}
                onChange={handleInputChange}
              />
            </FlexBox>
            {/* college */}
            <FlexBox>
              <SchoolIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                label="College (Registered Id)"
                name="college"
                fullWidth
                required
                type="text"
                variant="standard"
                color="secondary"
                value={user.college}
                onChange={handleInputChange}
              />
            </FlexBox>
            {/* password */}
            <FlexBox>
              <PasswordIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                label="Password"
                name="password"
                color="secondary"
                type={showPassword ? "text" : "password"}
                variant="standard"
                onChange={handleInputChange}
              />
            </FlexBox>
            {/* confirm password */}
            <FlexBox>
              <PasswordIcon />
              <TextField
                sx={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
                fullWidth
                required
                label="Confirm Password"
                name="confirmPassword"
                color="secondary"
                type="password"
                variant="standard"
                onChange={handleInputChange}
              />
            </FlexBox>
            <Button variant="contained" color="secondary" type="submit">
              Register
            </Button>
          </Stack>
        </StyledPaper>
      </CustomStack>
    </div>
  );
};

export default Register;
