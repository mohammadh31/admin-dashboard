import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function ManageTeam() {
  const rows = [
    {
      id: 1,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
    {
      id: 2,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
    {
      id: 3,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
    {
      id: 4,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
    {
      id: 5,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
    {
      id: 6,
      col1: 1,
      col2: "avnln",
      col3: "amv;ma@gmail.com'",
      col4: 19,
      col5: +96329939849,
      col6: "a;vmm;",
    },
  ];

  const columns = [
    {
      field: "col1",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col2",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col3",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col4",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col5",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col6",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>
  );
}

export default ManageTeam;
