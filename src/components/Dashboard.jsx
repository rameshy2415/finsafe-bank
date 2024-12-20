import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Container,
} from "@mui/material";
import Slider from "react-slick";

const Dashboard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    width: 345,
  };

  const offers = [
    {
      title: "0% Interest for 12 Months",
      description:
        "Apply for a credit card today and enjoy 0% interest on purchases for the first 12 months.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Save More with Fixed Deposits",
      description:
        "Earn up to 8% interest on fixed deposits for 5 years or more.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Personal Loan Offers",
      description: "Get a personal loan at an interest rate as low as 10%.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Carousel Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Latest Announcements
        </Typography>

        <Grid2 container spacing={3}>
          <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 0 }}>
              <CardContent>
                <Slider {...sliderSettings}>
                  <Box>
                    <img
                      src="https://via.placeholder.com/800x300"
                      alt="Announcement 1"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Box>
                    <img
                      src="https://via.placeholder.com/800x300"
                      alt="Announcement 2"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Box>
                    <img
                      src="https://via.placeholder.com/800x300"
                      alt="Announcement 3"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                </Slider>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>

      {/* Offers Section */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Exclusive Offers
        </Typography>
        <Grid2 container spacing={3}>
          {offers.map((offer, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={offer.title}
                  height="140"
                  image={offer.image}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {offer.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {offer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Dashboard;
