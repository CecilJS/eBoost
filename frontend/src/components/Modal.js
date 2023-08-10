"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RequestForm from "./RequestForm";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { red, green, grey } from "@mui/material/colors";
import { usePredictionContext } from "@/app/context/PredictionContext";
import Cookies from "js-cookie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #848778",
  boxShadow: 24,
  p: 4,
};

export default function LogModal() {
  const [open, setOpen] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const { prediction, setPrediction } = usePredictionContext();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  // Get the actual prediction set as a cookie
  useEffect(() => {
    // Check if the code is running on the frontend
    if (typeof window !== "undefined") {
      // Store the expiry date in a variable
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

      Cookies.set("prediction", prediction.prediction, {
        expires: oneWeekFromNow,
      });
    }
  }, [prediction]);

  const currentPrediction = Number(Cookies?.get("prediction"));

  // Dynamically set the color representing the device health based on the prediction received from the model

  let color;
  if (currentPrediction === 1) {
    color = green[500];
  } else if (currentPrediction === 0) {
    color = red[500];
  } else {
    color = grey[500];
  }

  return (
    <div>
      <Button onClick={handleOpen}>Check Status</Button>
      <Brightness1Icon sx={{ color: { color } }} fontSize="small" />
      <Button onClick={handleOpenSecondModal}>Tips</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RequestForm onClose={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={openSecondModal}
        onClose={handleCloseSecondModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Here are some tips for you to consider
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please note that these tips do not replace getting proper servicing
            from an approved garage.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
