import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid/internals";
import React from "react";
import { columns, rows } from "./data";

const InvoicesBalances = () => {
  return (
    <Box mx="auto" sx={{ height: "100%", width: "95%" }}>
      <DataGrid
        rows={rows}
        checkboxSelection
        showToolbar
        slots={{ toolbar: GridToolbar }}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default InvoicesBalances;
