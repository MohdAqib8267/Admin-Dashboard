import "./ProductsList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductsList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "𝐈𝐃", width: 90 },
    {
      field: "product",
      headerName: "𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "𝐒𝐭𝐨𝐤𝐞", width: 200 },
    {
      field: "status",
      headerName: "𝐒𝐭𝐚𝐭𝐮𝐬",
      width: 120,
    },
    {
      field: "price",
      headerName: "𝐏𝐫𝐢𝐜𝐞",

      width: 160,
    },
    {
      feild: "action",
      headerName: "𝐀𝐜𝐭𝐢𝐨𝐧",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              onClick={() => handleDelete(params.row.id)}
              className="Delete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="UserList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid className="Grid"
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ProductsList;
