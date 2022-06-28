import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,157,180,1) 2%, rgba(49,46,116,1) 36%, rgba(0,58,161,1) 73% , rgba(69,187,252,1)100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="All Blogs" />
            <Tab label="My Blogs" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            LogOut
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
