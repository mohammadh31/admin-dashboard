import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";

const ContactsInformation = () => {
  return (
    <Box mx="auto" sx={{ height: "100%", width: "95%" }}>
      <DataGrid
        rows={rows}
        showToolbar
        slots={{ toolbar: GridToolbar }}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default ContactsInformation;
