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
              ? "rgba(0, 255, 160, 0.1)"
              : severity === "error"
              ? "rgba(255, 0, 0, 0.1)"
              : "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff", // ¡ahora sí se ve el texto!
        }}
      >
        {message}
      </Alert>
    </Collapse>
  );
}
