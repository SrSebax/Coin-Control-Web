import React from "react";
import { Alert, Collapse } from "@mui/material";

export default function AlertMessageComponent({ open, message, severity, onClose }) {
  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        onClose={onClose}
        sx={{
          mb: 2,
          borderRadius: 2,
          backgroundColor:
            severity === "success"
              ? "#00FFA01A"
              : severity === "error"
              ? "#FF00001A"
              : "#FFFFFF1A",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff", // ¡ahora sí se ve el texto!
        }}
      >
        {message}
      </Alert>
    </Collapse>
  );
}
