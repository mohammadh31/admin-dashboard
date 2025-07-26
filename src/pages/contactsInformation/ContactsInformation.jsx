import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";
import { Header } from "../../components/Header";

const ContactsInformation = () => {
  return (
    <Box mx="auto" sx={{ height: "100%", width: "95%" }}>
      <Header
        title={"contacts information"}
        subTitle={"list of contacts for future reference"}
      />
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
