"use client";
import "../../app/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <main className="font-sans ">
      <Navbar />

      <Box
        sx={{
          width: 1000,
          height: 300,
          marginTop: 10,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            letterSpacing: 1,
            lineHeight: 1.5,
            color: "#1a09f4",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          About eBoost
        </Typography>

        <Typography
          variant="body1"
          sx={{ letterSpacing: 1, lineHeight: 1.5, mt: 3 }}
        >
          eBoost is a predictive maintenance system which was built using
          Machine Learning (ML) algorithms. This application consists of a
          frontend user interface which allows the end user to log maintenance
          reports of specific machines and get immediate health report alongside
          tips to maintain the machine’s health.
        </Typography>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 1, lineHeight: 1.5, mt: 5 }}
        >
          The backend exposes a RESTful API which houses the machine learning
          model which predicts the machine’s health based on the inputs fed to
          it via the frontend. A comparison of at least three ML algorithms as
          well as findings from the literature review revealed that the Naïve
          Bayes algorithm performs best in predictive maintenance systems. In
          the future, we aim to deploy different ML models and expose them via
          different endpoints in order to cater for machines with different
          features.
        </Typography>
      </Box>

      <Footer />
    </main>
  );
}
