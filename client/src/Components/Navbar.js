import React from "react";
import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Box,
  styled,
  stepLabelClasses
} from "@mui/material";
import { useNavigate } from "react-router-dom";

//styled components
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center"
});

const StyledAppBar = styled(AppBar)({
  // background: " rgb(7,124,115)"
  // background:
  //   "linear-gradient(180deg, rgba(7,124,115,1) 0%, rgba(255,255,255,1) 100%)"
  background: "rgb(3,47,44)",
  background:
    "linear-gradient(180deg, rgba(3,47,44,1) 10%, rgba(5,106,99,1) 100%)"
  //5, 106, 99, 1
});

const Logo = styled(Typography)({
  color: "white",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "1.1em",
  cursor: "pointer"
});

const ActionButton = styled(Button)({
  fontWeight: 600,
  fontFamily: "Poppins",
  color: "black",
  textTransform: "unset"
  // border: "2px solid white"
});

const LoginButton = styled(Button)({
  fontFamily: "Poppins",
  fontWeight: 600
});

//react component
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="sticky" elevation={1}>
      <Container>
        <StyledToolbar>
          <Box>
            <Logo onClick={() => navigate("/")}>Live Notes</Logo>
          </Box>
          <Box>
            <ActionButton
              variant="text"
              color="info"
              onClick={() => navigate("/login")}
              sx={{ margin: "1em", color: "white" }}
            >
              LogIn
            </ActionButton>
            <ActionButton
              variant="contained"
              color="info"
              onClick={() => navigate("/register")}
            >
              Register
            </ActionButton>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
