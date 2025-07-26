import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid/internals";
import React from "react";
import { columns, rows } from "./data";
import { Header } from "../../components/Header";

const InvoicesBalances = () => {
  return (
    <Box mx="auto" sx={{ height: "100%", width: "95%" }}>
      <Header title={"invoices"} subTitle={"list of invoice balances"} />

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
