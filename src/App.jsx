import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "./theme";
import "./index.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          {/* <Container>
        <Dashboard />
      </Container> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/accounts" element={<Accounts />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/bill-payments" element={<BillPayments />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
