import { Box,  Grid2, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f6f8', color: '#000',  mt: 5, zIndex: (theme) => theme.zIndex.drawer + 1, }} >

        <Grid2 container spacing={4}>
          {/* About Section */}
          <Grid2 item size={{xs:12, sm:8, md:12}} sx={{textAlign: 'center'}}> 
            <Typography variant="h6" className="text-blue-500" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are committed to providing the best banking experience with secure and user-friendly services.
            </Typography>
          </Grid2>

          {/* Quick Links Section */}
          <Grid2 item size={{xs:12, sm:8,md:12}} sx={{textAlign: 'center'}}>
            <Typography variant="h6" gutterBottom className="text-blue-500">
              Quick Links
            </Typography>
            <Link href="#dashboard" color="inherit" underline="hover" display="block">
              Dashboard
            </Link>
            <Link href="#accounts" color="inherit" underline="hover" display="block">
              Accounts
            </Link>
            <Link href="#transfer" color="inherit" underline="hover" display="block">
              Transfer
            </Link>
            <Link href="#support" color="inherit" underline="hover" display="block">
              Support
            </Link>
          </Grid2>


          {/* Contact Section */}
          <Grid2 item size={{xs:12, sm:8, md:12}} sx={{textAlign: 'center'}}>
            <Typography variant="h6"  gutterBottom className="text-blue-500">
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@bankapp.com</Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
            <Typography variant="body2">Address: 123 Bank Street, Finance City</Typography>
          </Grid2>

        </Grid2>

        {/* <Divider sx={{ mt:2, width:'90%' }} /> */}
        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center',  marginTop: 3, mb:2 }}>
          <Typography variant="body2" color="secondary">
            © {new Date().getFullYear()} <b>FinSafe Bank.</b>  All rights reserved.
          </Typography>
        </Box>

    </Box>
  );
};

export default Footer;
