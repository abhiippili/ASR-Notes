import React from "react";
import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Box,
  styled
} from "@mui/material";
import { useNavigate } from "react-router-dom";

//styled components
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center"
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
  fontFamily: "Poppins"
});

//react component
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container>
        <StyledToolbar>
          <Box>
            <Logo onClick={() => navigate("/")}>Live Notes</Logo>
          </Box>
          <Box>
            <ActionButton
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/login")}
              sx={{ margin: "1em" }}
            >
              LogIn
            </ActionButton>
            <ActionButton
              variant="contained"
              color="secondary"
              onClick={() => navigate("/register")}
            >
              Register
            </ActionButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
