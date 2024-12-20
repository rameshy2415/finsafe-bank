// src/components/Dashboard.js
import React from 'react';
import { Card, CardContent, Typography, Grid2, Button, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      
      {/* Account Summary Section */}
      <Grid2 container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid2 item size={{xs:12,sm:6,md:4}}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Checking</Typography>
              <Typography variant="h5">$1500</Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item size={{xs:12,sm:6,md:4}}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Savings</Typography>
              <Typography variant="h5">$2500</Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
      
      {/* Recent Transactions Section */}
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography>12/19/2024 | Starbucks | -$10</Typography>
          <Typography>12/18/2024 | PayPal | -$50</Typography>
          <Typography>12/17/2024 | Deposit | +$500</Typography>
        </CardContent>
      </Card>
      
      {/* Quick Actions Section */}
      <Typography variant="h6" gutterBottom>
        Quick Actions
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item>
          <Button variant="contained" color="primary">Transfer Money</Button>
        </Grid2>
        <Grid2 item>
          <Button variant="contained" color="secondary">Pay Bills</Button>
        </Grid2>
        <Grid2 item>
          <Button variant="contained" color="success">Deposit Check</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
