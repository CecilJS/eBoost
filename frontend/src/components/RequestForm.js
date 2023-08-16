"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { logRequest } from "@/services/logs/LogService";
import {
  getPrediction,
  postPredictionResults,
} from "@/services/prediction/PredictionService";
import { useState } from "react";
import { usePredictionContext } from "@/app/context/PredictionContext";

export default function RequestForm({ onClose }) {
  const [formData, setFormData] = useState({
    /* eslint-disable quotes */
    UDI: "",
    Air_temperature: "",
    Process_temperature: "",
    Rotational_speed: "",
    Torque: "",
    Tool_wear: "",
    TWF: "",
    HDF: "",
    PWF: "",
    OSF: "",
    RNF: "",
  });

  const { hasPosted, setHasPosted } = usePredictionContext();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    logRequest(formData);
    getPrediction(formData).then((response) => {
      postPredictionResults(response.data);
      setHasPosted(true);
    });

    onClose();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h4" data-cy="Modal_heading">
          Machine Status Check Form
        </Typography>
        <Typography variant="body1" data-cy="Modal_description">
          Please enter the current readings into the following fields to receive
          the health of this machine
        </Typography>
      </div>
      <br />
      <div>
        <TextField
          required
          id="standard-required"
          type="number"
          label="UDI"
          variant="standard"
          name="UDI"
          value={formData.UDI}
          onChange={handleInputChange}
          data-cy="Modal_UDI"
        />
        <TextField
          required
          id="standard-disabled"
          label="Air Temperature"
          variant="standard"
          name="Air_temperature"
          value={formData.Air_temperature}
          onChange={handleInputChange}
          data-cy="Modal_Air_Temperature"
        />
        <TextField
          required
          id="standard-password-input"
          label="Process Temperature"
          variant="standard"
          name="Process_temperature"
          value={formData.Process_temperature}
          onChange={handleInputChange}
          data-cy="Modal_Process_Temperature"
        />
        <TextField
          required
          id="standard-read-only-input"
          label="Rotational_speed"
          variant="standard"
          name="Rotational_speed"
          value={formData.Rotational_speed}
          onChange={handleInputChange}
          data-cy="Modal_Rotational_speed"
        />
        <TextField
          required
          id="standard-number"
          label="Torque"
          variant="standard"
          name="Torque"
          value={formData.Torque}
          onChange={handleInputChange}
          data-cy="Modal_Torque"
        />
        <TextField
          required
          id="standard-search"
          label="Tool Wear"
          variant="standard"
          name="Tool_wear"
          value={formData.Tool_wear}
          onChange={handleInputChange}
          data-cy="Modal_Tool_Wear"
        />
        <TextField
          required
          id="standard-helperText"
          label="TWF"
          variant="standard"
          name="TWF"
          value={formData.TWF}
          onChange={handleInputChange}
          data-cy="Modal_TWF"
        />
        <TextField
          required
          id="standard-helperText"
          label="HDF"
          variant="standard"
          name="HDF"
          value={formData.HDF}
          onChange={handleInputChange}
          data-cy="Modal_HDF"
        />
        <TextField
          required
          id="standard-helperText"
          label="PWF"
          variant="standard"
          name="PWF"
          value={formData.PWF}
          onChange={handleInputChange}
          data-cy="Modal_PWF"
        />
        <TextField
          required
          id="standard-helperText"
          label="OSF"
          variant="standard"
          name="OSF"
          value={formData.OSF}
          onChange={handleInputChange}
          data-cy="Modal_OSF"
        />
        <TextField
          required
          id="standard-helperText"
          label="RNF"
          variant="standard"
          name="RNF"
          value={formData.RNF}
          onChange={handleInputChange}
          data-cy="Modal_RNF"
        />
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={handleClick}>
          Send
        </Button>
      </div>
    </Box>
  );
}
