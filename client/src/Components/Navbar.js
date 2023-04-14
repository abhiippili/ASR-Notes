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
  fontSize: "1.1em"
});

const ActionButton = styled(Button)({
  fontWeight: 600,
  fontFamily: "Poppins"
});

//react component
const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Container>
        <StyledToolbar>
          <Box>
            <Logo>ASR Notes</Logo>
          </Box>
          <Box>
            <ActionButton
              variant="outlined"
              color="secondary"
              sx={{ margin: "1em" }}
            >
              Sign In
            </ActionButton>
            <ActionButton variant="contained" color="secondary">
              Sign Up
            </ActionButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
