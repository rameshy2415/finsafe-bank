// src/components/Navbar.js
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Dashboard", path: "/" },
    { text: "Accounts", path: "/accounts" },
    { text: "Transfer", path: "/transfer" },
    { text: "Bill Payments", path: "/bill-payments" },
    { text: "Support", path: "/support" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#f4f6f8",
        color: "#000",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* Bank Logo */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <AccountBalanceIcon
            style={{ height: 40, marginRight: 10 }}
            color="secondary"
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            color="secondary"
          >
            FineSafe Bank
          </Typography>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                margin: "0 1rem",
                fontSize: "1rem",
              }}
            >
              {item.text}
            </Link>
          ))}
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
            href="#outlined-buttons"
          >
            Login
          </Button>
          {/* <IconButton color="inherit">
            <LoginIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton> */}
        </Box>

        {/* Mobile Icons (Login and Profile) */}
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
            href="#outlined-buttons"
          >
            Login
          </Button>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            color="secondary"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            {/* <ListItem disablePadding>
              <ListItemButton component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
