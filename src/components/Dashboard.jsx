import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Container,
} from "@mui/material";
//import Slider from "react-slick";
import Carousel from "./Carousel";
/* import img1 from "../assets/FB716-x-298.jpg";
import img2 from "../assets/FB2_716x298-new.jpg";
import img3 from "../assets/FB3_XCL_716x298-new.jpg"; 
import img4 from "../assets/LOCC-716x298-30Jan.jpg"
import img5 from "../assets/FB5_716-298-20Jan.png" */

const Dashboard = () => {
  /* const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    width: 345,
  }; */

  const images = [
    "/FB716-x-298.jpg",
    "/FB2_716x298-new.jpg",
    "/FB3_XCL_716x298-new.jpg",
    "/LOCC-716x298-30Jan.jpg",
    "/FB5_716-298-20Jan.png",
  ];

  /*   const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ]; */

  const offers = [
    {
      title: "0% Interest for 12 Months",
      description:
        "Apply for a credit card today and enjoy 0% interest on purchases for the first 12 months.",
      image: "https://via.assets.so/img.jpg?w=300&h=200&tc=blue",
    },
    {
      title: "Save More with Fixed Deposits",
      description:
        "Earn up to 8% interest on fixed deposits for 5 years or more.",
      image: "https://via.assets.so/img.jpg?w=300&h=200&tc=blue",
    },
    {
      title: "Personal Loan Offers",
      description: "Get a personal loan at an interest rate as low as 10%.",
      image: "https://via.assets.so/img.jpg?w=300&h=200&tc=blue",
    },
  ];

  return (
    <>
      {/* Carousel Section */}
      <div className="max-w-2xl mx-auto">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {[...images.map((s, i) => <img key={i} src={s} />)]}
        </Carousel>
      </div>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        {/* Offers Section */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Exclusive Offers
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid2 container spacing={3}>
              {offers.map((offer, index) => (
                <Grid2 item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        alt={offer.title}
                        height="140"
                        image={offer.image}
                      />

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
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
