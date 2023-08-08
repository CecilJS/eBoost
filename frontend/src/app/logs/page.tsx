//@ts-ignore:
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { retrieveLogs } from "@/services/logs/LogService";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #848778",
  boxShadow: 24,
  p: 4,
};

export default function LogReport() {
  const [logs, setLogs] = useState<any[]>([]);
  const transformedLogs = logs.map((log, i) => ({
    id: i,
    logs: log,
  }));

  const handleRetrieveLogs = () => {
    retrieveLogs().then((response) => setLogs(response.data));
  };
  useEffect(() => {
    handleRetrieveLogs();
  }, []);

  return (
    <main className="font-sans">
      <Navbar />
      <Box component="form" sx={style} noValidate autoComplete="off">
        <div>
          <Typography variant="h4">Machine Maintenance Log</Typography>
          <Typography variant="body1">
            This section contains a record of all the maintenance checks carried
            out on the various machines
          </Typography>
        </div>
        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>UDI</TableCell>
                <TableCell align="right">Air Temperature</TableCell>
                <TableCell align="right">Process Temperature</TableCell>
                <TableCell align="right">Rotational Speed</TableCell>
                <TableCell align="right">Torque</TableCell>{" "}
                <TableCell align="right">Tool Wear</TableCell>
                <TableCell align="right">TWF</TableCell>
                <TableCell align="right">HDF</TableCell>
                <TableCell align="right">PWF</TableCell>
                <TableCell align="right">OSF</TableCell>
                <TableCell align="right">RNF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transformedLogs.map((log: any) => (
                <TableRow
                  key={log.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {log.logs.UDI}
                  </TableCell>
                  <TableCell align="right">
                    {log.logs.Air_temperature}
                  </TableCell>
                  <TableCell align="right">
                    {log.logs.Process_temperature}
                  </TableCell>
                  <TableCell align="right">
                    {log.logs.Rotational_speed}
                  </TableCell>
                  <TableCell align="right">{log.logs.Torque}</TableCell>
                  <TableCell align="right">{log.logs.Tool_wear}</TableCell>
                  <TableCell align="right">{log.logs.TWF}</TableCell>
                  <TableCell align="right">{log.logs.HDF}</TableCell>
                  <TableCell align="right">{log.logs.PWF}</TableCell>
                  <TableCell align="right">{log.logs.OSF}</TableCell>
                  <TableCell align="right">{log.logs.RNF}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </main>
  );
}
